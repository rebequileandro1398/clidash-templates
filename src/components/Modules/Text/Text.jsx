import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Text.scss'

export const Text = ({ state, id, newInput, setNewInput}) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(state && state)
  const [isEdit, setIsEdit] = useState(false)
  const modifyText = (e) =>{
    if(state) {
      dispatch(modify(id, {name: input}))
      setIsEdit(false)
    } else {
      e.preventDefault()
      setNewInput({
        ...newInput,
        name: input
      })
      setIsEdit(false)
    }
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }


  return (
    <div className='container-text' 
      onContextMenu={(e) => secondaryClick(e)}
      onClick={() => setIsEdit(true)}
    >
      {
     !isEdit && state ? 
       <div className='text'>
          <span>{input}</span>
      </div> :
      <Input 
        type={'text'} 
        setInput={setInput} 
        value={input}
        onSubmit={(e) => modifyText(e)}
        />
      }
    </div>
  )
}
