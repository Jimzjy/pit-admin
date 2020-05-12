import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { action as homeAction } from '../../store/home'
import { action as dashboardAction } from '../../store/dashboard'
import './style.scss'
import { Table, Modal } from '../../components'
import request from '../../service'

function Device(props) {
  const [ showDeleteModal, setShowDeleteModal ] = useState(false)
  const [ showEditModal, setShowEditModal ] = useState(false)
  const [ editModalData, setEditModalData ] = useState({ name: '', id: '', commands: [], links: [], tmpCommand: '', tmpLink: { to: '', from: '', toID: '' } })
  const [ idData, setIDData ] = useState({})
  const [ showAddModal, setShowAddModal ] = useState(false)
  const { route, dashboard } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const obj = {}
    dashboard.devices.forEach(item => {
      obj[item.id] = item
    })
    setIDData(obj)
  }, [dashboard])

  const options = [
    { name: '编辑', onClick: (index) => {
      setEditModalData({...(JSON.parse(JSON.stringify(dashboard.devices[index]))), tmpCommand: '', tmpLink: { to: '', from: '', toID: '' }})
      setShowEditModal(true)
    } },
    { name: '删除', onClick: (index) => {
      setEditModalData({...editModalData, id: dashboard.devices[index].id})
      setShowDeleteModal(true)
    } }, 
  ]

  const addCommand = () => {
    const command = editModalData.tmpCommand
    if (command && command.length > 0) {
      const commands = editModalData.commands
      commands.push(command)
      setEditModalData({
        ...editModalData,
        tmpCommand: ''
      })
    }
  }

  const removeCommand = (e) => {
    const index = e.target.dataset.index
    if (!index) return
    const commands = editModalData.commands
    commands.splice(index, 1)
    setEditModalData({
      ...editModalData,
    })
  }

  const renderLinks = () => {
    const items = []

    editModalData.links.forEach((obj, index) => {
      items.push(<div className='links' key={index}>
        <div className='edit_item_tag'>{ obj.from }</div>
        <div className='iconfont' style={{ marginBottom: '10px', marginRight: '10px', color: '#ffda0a' }}>&#xe751;</div>
        <div className='edit_item_tag'>{ idData[obj.toID].name }</div>
        <div className='edit_item_tag'>{ obj.to }</div>
        <span className='iconfont edit_item_tag_delete' onClick={() => {removeLink(index)}}>&#xe624;</span>
      </div>)
    })
    
    return items
  }

  const onDropDownFromChange = (e) => {
    const tmpLink = editModalData.tmpLink
    tmpLink.from = e.target.dataset.command

    setEditModalData({
      ...editModalData
    })
  }
  const onDropDownToIDChange = (e) => {
    const tmpLink = editModalData.tmpLink
    tmpLink.toID = e.target.dataset.id

    setEditModalData({
      ...editModalData
    })
  }
  const onDropDownToChange = (e) => {
    const tmpLink = editModalData.tmpLink
    tmpLink.to = e.target.dataset.command

    setEditModalData({
      ...editModalData
    })
  }

  const addLink = () => {
    const tmpLink = editModalData.tmpLink
    if (tmpLink.from !== '' && tmpLink.to !== '' && tmpLink.toID !== '') {
      const links = editModalData.links
      links.push(tmpLink)
      setEditModalData({
        ...editModalData,
        tmpLink: { to: '', from: '', toID: '' }
      })
    }
  }

  const removeLink = (index) => {
    const links = editModalData.links
    links.splice(index, 1)
    setEditModalData({
      ...editModalData
    })
  }

  const addDevice = () => {
    request(`
    mutation {
      createDevice(device: { name: "${editModalData.name}" }) {
        name
      }
    }
    `).then(res => {
      setShowAddModal(false)
      props.dispatchGetAllDevices()
    })
  }

  const deleteDevice = () => {
    request(`
    mutation {
      deleteDevices(ids: ["${editModalData.id}"]) {
        n
      }
    }
    `).then(res => {
      setShowDeleteModal(false)
      props.dispatchGetAllDevices()
    })
  }

  const editDevice = () => {
    const obj = {
      name: editModalData.name,
      commands: editModalData.commands,
      links: editModalData.links
    }

    request(`
    mutation {
      updateDevice(id: "${editModalData.id}", data: ${JSON.stringify(obj).replace(/"([^(")"]+)":/g,"$1:")}) {
        id
      }
    }
    `).then(res => {
      setShowEditModal(false)
      props.dispatchGetAllDevices()
    })
  }

  // todo: redo with useCallback
  // todo: redo style
  return (
    <div className='device'>
      <div className='device_add-button' onClick={() => {setShowAddModal(true)}}>Add</div>
      <Table data={dashboard.devices} options={options}></Table>
      <Modal show={showAddModal}>
        <div className='edit_item'>
          <span className='edit_item_label'>name:</span>
          <input type='text' className='edit_item_input' placeholder='请输入名称' value={ editModalData.name } onChange={(e) => { setEditModalData({ ...editModalData, name: e.target.value }) }} />
        </div>
        <div className='delete_button_wrapper'>
          <div className='delete_button cancel' onClick={() => {setShowAddModal(false)}}>取消</div>
          <div className='delete_button confirm' onClick={addDevice}>确认</div>
        </div>
      </Modal>
      <Modal show={showDeleteModal}>
        <div className='delete'>
          <div className='delete_text'>确认删除?</div>
          <div className='delete_button_wrapper'>
            <div className='delete_button cancel' onClick={() => {setShowDeleteModal(false)}}>取消</div>
            <div className='delete_button confirm' onClick={deleteDevice}>确认</div>
          </div>
        </div>
      </Modal>
      <Modal show={showEditModal}>
        <div className='edit'>
          <div className='edit_item'>
            <span className='edit_item_label'>name:</span>
            <input type='text' className='edit_item_input' placeholder='请输入名称' value={ editModalData.name } onChange={(e) => { setEditModalData({ ...editModalData, name: e.target.value }) }} />
          </div>
          <div className='edit_item'>
            <span className='edit_item_label'>commands:</span>
            <input type='text' className='edit_item_input' placeholder='请输入命令名' value={ editModalData.tmpCommand } onChange={(e) => { setEditModalData({ ...editModalData, tmpCommand: e.target.value }) }} />
            <span className='iconfont edit_item_input_add' onClick={addCommand}>&#xe69d;</span>
          </div>
          { editModalData.commands.length > 0 && <div className='edit_item' onClick={removeCommand}>
            { editModalData.commands.map((item, index) => <div className='edit_item_tag' key={index}>
              { item }<span className='iconfont edit_item_tag_close' data-index={index}>&#xe624;</span>
            </div>) }
          </div> }
          <div className='edit_item'>
            <span className='edit_item_label'>links:</span>
            <div className='edit_item_dropdown_wrapper'>
              <div className='edit_item_dropdown'>
                <div className='edit_item_dropdown_selected'>{ editModalData.tmpLink.from === '' ? '---' : editModalData.tmpLink.from }</div>
                <ul className='edit_item_dropdown_list' onClick={onDropDownFromChange}>
                  { editModalData.commands.map(item => <li className='edit_item_dropdown_list_item' key={item} data-command={item}>
                    { item }
                  </li>) }
                </ul>
              </div>
            </div>
            <div className='iconfont' style={{ marginRight: '10px', color: '#ffda0a' }}>&#xe751;</div>
            <div className='edit_item_dropdown_wrapper'>
              <div className='edit_item_dropdown'>
                <div className='edit_item_dropdown_selected'>{ editModalData.tmpLink.toID === '' ? '---' : idData[editModalData.tmpLink.toID].name }</div>
                <ul className='edit_item_dropdown_list' onClick={onDropDownToIDChange}>
                  { dashboard.devices.map(item => <li className='edit_item_dropdown_list_item' key={item.id} data-id={item.id}>
                    { item.name }
                  </li>) }
                </ul>
              </div>
            </div>
            <div className='edit_item_dropdown_wrapper'>
              <div className='edit_item_dropdown'>
                <div className='edit_item_dropdown_selected'>{ editModalData.tmpLink.to === '' ? '---' : editModalData.tmpLink.to }</div>
                <ul className='edit_item_dropdown_list' onClick={onDropDownToChange}>
                  { editModalData.tmpLink.toID !== '' && idData[editModalData.tmpLink.toID].commands.map(item => <li className='edit_item_dropdown_list_item' key={item} data-command={item}>
                    { item }
                  </li>) }
                </ul>
              </div>
            </div>
            <span className='iconfont edit_item_input_add' style={{ marginLeft: '0px' }} onClick={addLink}>&#xe69d;</span>
          </div>
          { editModalData.links.length > 0 && renderLinks()}
          <div className='delete_button_wrapper'>
            <div className='delete_button cancel' onClick={() => {setShowEditModal(false)}}>取消</div>
            <div className='delete_button confirm' onClick={editDevice}>确认</div>
          </div>        
        </div>
      </Modal>
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  },
  dispatchGetAllDevices() {
    dispatch(dashboardAction.getAllDevicesAsync())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Device));