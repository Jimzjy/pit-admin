import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { LineChart, Line } from 'recharts';
import { action } from '../../store/dashboard'
import { action as homeAction } from '../../store/home'
import './style.scss'

function Dashboard(props) {
  const { route, dispatchAdd } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const add = () => {
  //   dispatchAdd(2)
  // }

  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

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
              <div className='most-device_text'>Lock</div>
            </div>
          </div>
          <div className="card most-device" style={{ background: '#fff' }}>
            <div className='most-device_icon_wrapper'>
              <div className='iconfont most-device_icon'>&#xe639;</div>
            </div>
            <div>
              <div className='most-device_title'>今日我使用最多</div>
              <div className='most-device_text'>Lock</div>
            </div>
          </div>
        </div>
        <div className='card status'>
          <div className='card_title'>状态</div>
        </div>
      </div>
      <div className='block'>
        <div className='card active-record'>
          <div className='card_title' style={{ color: '#fff' }}>周活跃度记录</div>
          <LineChart width={400} height={200} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className='card active-today'>
          <div className='card_title'>日活跃度分布</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ dashboard, home }) => ({ dashboard, home });

const mapDispatchToProps = (dispatch) => ({
  dispatchAdd(data) {
    dispatch(action.add(data))
  },
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Dashboard));