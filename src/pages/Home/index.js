import React from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { Main, Nav, Logo, NavItem, Middle, Header, User } from './style'

function Home (props) {
  const { route, home } = props

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
          <NavLink to="/link">
            <span className="iconfont">&#xe614;</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/history">
            <span className="iconfont">&#xe8cd;</span>
          </NavLink>
        </NavItem>
      </Nav>
      <Middle>
        <Header>{ home.navName }</Header>
        <div className='nav-content'>
          { renderRoutes (route.routes) }
        </div>
      </Middle>
      <User>

      </User>
    </Main>
  )
}

const mapStateToProps = ({ home }) => ({ home });

export default connect(mapStateToProps)(React.memo(Home));