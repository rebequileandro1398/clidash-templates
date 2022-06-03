import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Number.scss'

export const Number = ({state, id, newInput, setNewInput}) => {
    const [input, setInput] = useState(state && state)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    const modifyText = (e) =>{
      if(state) {
        dispatch(modify(id, {number: input}))
        setIsEdit(false)
      } else {
        e.preventDefault()
        setNewInput({
          ...newInput,
          number: input
        })
        setIsEdit(false)
      }
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
      {!isEdit && state ? 
        <div>
          <span>#{input}</span>
        </div> :
      <Input
        onSubmit={(e) => modifyText(e)}
        type={'number'} 
        setInput={setInput} 
        value={input}
        />
      }
    </div>
  )
}
