import React from 'react'
import './style.scss'

function Modal(props) {
  const { show, children } = props

  return (
    <div className='modal'>
      { show && <div className='modal_content'>
        <div className='modal_card'>
          { children }
        </div>
      </div> }
    </div>
  )
}

export default React.memo(Modal)