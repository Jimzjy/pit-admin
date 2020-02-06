import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { action } from '../../store/dashboard'
import { action as homeAction } from '../../store/home'
import './style.scss'
import { Table } from '../../components'

function Dashboard(props) {
  const { route, dashboard } = props
  const [status, setStatus] = useState([
    { name: '总设备数', value: 0},
    { name: '今日总活跃度', value: 0},
    { name: '错误', value: 0},
    { name: '警告', value: 0}
  ])

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
    // props.dispatchGetWeekHistory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setStatus([
      { name: '总设备数', value: dashboard.devices.length},
      { name: '今日总活跃度', value: dashboard.dayActivity.reduce((a, c) => a + c.value, 0)},
      { name: '错误', value: 0},
      { name: '警告', value: 0}
    ])
  }, [dashboard])

  return (
    <div className='dashboard'>
      {/* dashboard
      {props.dashboard.v}
      <button onClick={add}></button> */}
      <div className='block'>
        <div>
          <div className="card most-device">
            <div className='most-device_icon_wrapper'>
              <div className='iconfont most-device_icon'>&#xe8e7;</div>
            </div>
            <div>
              <div className='most-device_title'>今日最活跃设备</div>
              <div className='most-device_text'>lock</div>
            </div>
          </div>
          <div className="card most-device" style={{ background: '#fff' }}>
            <div className='most-device_icon_wrapper'>
              <div className='iconfont most-device_icon'>&#xe639;</div>
            </div>
            <div>
              <div className='most-device_title'>今日我使用最多</div>
              <div className='most-device_text'>lock</div>
            </div>
          </div>
        </div>
        <div className='card status'>
          <div className='card_title'>状态</div>
          <Table data={status}></Table>
        </div>
      </div>
      <div className='block'>
        <div className='card active-record'>
          <div className='card_title' style={{ color: '#fff' }}>周活跃度记录</div>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={dashboard.weekActivity}>
              <Line type="monotone" dataKey="value" stroke="#ffda0a" />
              <XAxis dataKey="time" tickLine={false} stroke='#ffffff66'/>
              <Tooltip></Tooltip>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='card active-today'>
          <div className='card_title'>日活跃度分布</div>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={dashboard.dayActivity}>
              <XAxis dataKey="time" />
              <Tooltip />
              <Bar dataKey="value" fill="#ffda0a"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchGetWeekHistory() {
    dispatch(action.getWeekHistoryAsync())
  },
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Dashboard));