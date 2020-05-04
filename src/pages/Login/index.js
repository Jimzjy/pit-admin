import React, { useState, useCallback } from 'react'
import './style.scss'
import request from '../../service'

function Login(props) {
  const { history } = props
  const [ name, setName ] = useState('')
  const [ password, setPasswod ] = useState('')

  const onLoginClick = () => {
    if (name.length > 0 && password.length > 0) {
      request(`
      {
        userLogin(name: "${name}") { name, id }
      }
      `).then(res => {
        const data = res.data.data.userLogin
        if (data) {
          localStorage.setItem('user', JSON.stringify(data))
          history.push('/')
        }
      })
    }
  }

  const onNameChange = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const onPassChange = useCallback((e) => {
    setPasswod(e.target.value)
  }, [])

  return (
    <div className='login'>
      <div className='login_card'>
        <div className='login_card_title'>登录</div>
        <input className='login_input' placeholder='用户名' value={name} onChange={onNameChange}></input>
        <input className='login_input' placeholder='密码' value={password} type="password" onChange={onPassChange}></input>
        <div className='login_button' onClick={onLoginClick}>登录</div>
      </div>
    </div>
  )
}

export default React.memo(Login)