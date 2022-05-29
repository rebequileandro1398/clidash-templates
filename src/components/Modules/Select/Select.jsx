import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
import './Select.scss'


export const Select = ({ state, id, options}) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(state)
  const [isEdit, setIsEdit] = useState(false)
  const [colors, setColors] = useState('green')
  useEffect(() => {
    options?.map(e => {
      return e.text === state && setColors(e.color)
    })
  }, [state, options])

  const modifySelect = (category) =>{
    dispatch(modify(id, {status: category}))
    setIsEdit(false)
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }
  const onHandleChange = (value, color) => {
    setColors(color) 
    setInput(value)
    modifySelect(value)
  }

  return (
    <div className='container-categories'>
      <div>
       <div onClick={() => setIsEdit(true)}>
          <button className={`${colors}-button`}>{input}</button>
      </div>
      </div>
      {isEdit &&
          <div className='select-box'
          onContextMenu={(e) => secondaryClick(e)}
          >
            {options?.map(e => (
              <button onClick={() => onHandleChange(e.text, e.color)} className={`${e.color}-button`}>
                {e.text}
              </button>
            ))
            }
        </div>
      }
    </div>
  )
}