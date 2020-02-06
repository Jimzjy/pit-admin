import React, { useMemo } from 'react'
import './style.scss'

function Table(props) {
  const { data, options,  } = props
  const keys = useMemo(() => {
    if (!data.length) return []
    const _keys = Object.keys(data[0])
    if (options) _keys.push('options')

    return _keys.map(item => <div className='table_keys_item' key={item}>
      { item }
    </div>)
  }, [data, options])
  const rows = useMemo(() => {
    if (!data.length) return []
    return data.map((item, index) => <div className='table_row' key={index}>
      { Object.keys(data[0]).map(el => <div className='table_row_item' key={el}>
        { typeof item[el] === 'object' ? '编辑查看' : item[el] }
      </div>) }
      { options ? <div className='dropdown'>
        <div className='dropdown_text'>options</div>
        <div className='dropdown_content'>
          { options.map(item => <div className='dropdown_content_item' onClick={() => {item.onClick(index)}} key={item.name}>
            { item.name }
          </div>) }
        </div>
      </div> : '' }
    </div>)
  }, [data, options])

  return (
    <div className='table'>
      <div className='table_keys'>
        { keys }
      </div>
      { rows }
    </div>
  )
}

export default React.memo(Table)