import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { action as homeAction } from '../../store/home'
import './style.scss'
import { Table } from '../../components'

function History(props) {
  const { route } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const data = [
    { user: 'jim', device: 'lock', command: 'open', time: '2019-02-05' },
    { user: 'jim', device: 'lock', command: 'open', time: '2019-02-05' },
    { user: 'jim', device: 'lock', command: 'open', time: '2019-02-05' },
    { user: 'jim', device: 'lock', command: 'open', time: '2019-02-05' },
    { user: 'jim', device: 'lock', command: 'open', time: '2019-02-05' }
  ]

  return (
    <div className='history'>
      <Table data={data}></Table>
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(History));