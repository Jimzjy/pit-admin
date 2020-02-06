import React, { useEffect } from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import style from '../../assets/global-style';
import { Main, Nav, Logo, NavItem, Middle, User, Divide, Label } from './style'
import { action as dashboardAction } from '../../store/dashboard'

function Home (props) {
  const { route, home, dashboard } = props

  useEffect(() => {
    props.dispatchGetWeekHistory()
    props.dispatchGetAllDevices()
    props.dispatchGetAllHistory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Main>
      <Nav>
        <Logo>
          <span className='w0'>P</span>
          <span className='w1'>i</span>
          <span className='w2'>t</span>
        </Logo>
        <NavItem>
          <NavLink to="/dashboard">
            <span className="iconfont">&#xe94f;</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/device">
            <span className="iconfont">&#xeaff;</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/history">
            <span className="iconfont">&#xe8cd;</span>
          </NavLink>
        </NavItem>
        <div className='exit'>
          <NavItem>
            <NavLink to="/login">
              <span className="iconfont">&#xe62c;</span>
            </NavLink>
          </NavItem>
        </div>
      </Nav>
      <Middle>
        <div className='header'>{ home.navName }</div>
        <div className='nav-content'>
          { renderRoutes (route.routes) }
        </div>
      </Middle>
      <User>
        <div className='content'>
          <div className='content_user'>
            <div className='content_user_left'>
              <div>Hello,</div>
              <div className='name'>Jim</div>
            </div>
            <div className='content_user_right'>
              <img className='content_user_right_avatar' src={require('../../assets/img/user.png')} alt='user'/>
            </div>
          </div>
          <Divide></Divide>
          <div className='content_labels'>
            <Label color={style["primary-color"]}>
              <div className="label_title">设备数</div>
              <div className='label_content'>
                <div className='label_content_deco'></div>
                <div className='label_content_text'>{ dashboard.devices.length }</div>
              </div>
            </Label>
            <Label color={style["accent-color"]}>
              <div className="label_title">活跃度</div>
              <div className='label_content'>
                <div className='label_content_deco'></div>
                <div className='label_content_text'>{dashboard.dayActivity.reduce((a, c) => a + c.value, 0)}</div>
              </div>
            </Label>
          </div>
          <Divide></Divide>
          <div className='recent_title'>最近活动</div>
          <div className='recent'>
            { dashboard.userHistory.map((item, index) => <div className='recent_item' key={index}>
              <div className='recent_item_date'>{ item.date }</div>
              <div className='recent_item_block'>
                <div className="recent_item_text">{ item.device }</div>
                <span className="iconfont recent_item_arrow">&#xe751;</span>
                <div className="recent_item_text">{ item.command }</div>
              </div>
            </div>) }
          </div>
        </div>
      </User>
    </Main>
  )
}

const mapStateToProps = ({ home, dashboard }) => ({ home, dashboard });

const mapDispatchToProps = (dispatch) => ({
  dispatchGetWeekHistory() {
    dispatch(dashboardAction.getWeekHistoryAsync())
  },
  dispatchGetAllDevices() {
    dispatch(dashboardAction.getAllDevicesAsync())
  },
  dispatchGetAllHistory() {
    dispatch(dashboardAction.getAllHistoryAsync())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));