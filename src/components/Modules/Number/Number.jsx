import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Number.scss'

export const Number = ({state, id}) => {
    const [input, setInput] = useState(state)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    const modifyText = () =>{
      dispatch(modify(id, {number: input}))
      setIsEdit(false)
    }
    const secondaryClick = (e) =>{
      e.preventDefault()
      setIsEdit(false)
    }
  return (
    <div
      className='container-number'
      onContextMenu={(e) => secondaryClick(e)}
      onClick={() => setIsEdit(true)}
    >
      {!isEdit ? 
        <div>
          <span>#{input}</span>
        </div> :
      <Input
        onSubmit={() => modifyText()}
        type={'number'} 
        setInput={setInput} 
        value={input}
        />
      }
    </div>
  )
}
