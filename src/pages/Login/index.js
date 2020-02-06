import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Login() {

  return (
    <div className='login'>
      <div className='login_card'>
        <div className='login_card_title'>登录</div>
        <input className='login_input' placeholder='用户名'></input>
        <input className='login_input' placeholder='密码'></input>
        <NavLink to='/'>
          <div className='login_button'>登录</div>
        </NavLink>
      </div>
    </div>
  )
}

export default React.memo(Login)