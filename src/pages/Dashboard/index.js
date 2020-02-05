import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { action } from '../../store/dashboard'
import { action as homeAction } from '../../store/home'
import './style.scss'
import { Table } from '../../components'

function Dashboard(props) {
  const { route } = props

  useEffect(() => {
    props.dispatchUpdateNavName(route.name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const add = () => {
  //   dispatchAdd(2)
  // }

  const data = [
    { time: '0205', value: 10 },
    { time: '0206', value: 23 },
    { time: '0207', value: 34 },
    { time: '0208', value: 20 },
    { time: '0209', value: 80 },
    { time: '0210', value: 40 },
    { time: '0211', value: 10 }
  ];

  const statusData = [
    { name: '总设备数', value: 100},
    { name: '总活跃度', value: 100},
    { name: '错误', value: 0},
    { name: '警告', value: 0}
  ]

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
          <Table data={statusData}></Table>
        </div>
      </div>
      <div className='block'>
        <div className='card active-record'>
          <div className='card_title' style={{ color: '#fff' }}>周活跃度记录</div>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
              <Line type="monotone" dataKey="value" stroke="#ffda0a" />
              <XAxis dataKey="time" tickLine={false} stroke='#ffffff66'/>
              <Tooltip></Tooltip>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='card active-today'>
          <div className='card_title'>日活跃度分布</div>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data}>
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
  dispatchAdd(data) {
    dispatch(action.add(data))
  },
  dispatchUpdateNavName(name) {
    dispatch(homeAction.updateNavName(name))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Dashboard));