import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Number.scss'

export const Number = ({state, id, newInput, setNewInput, mobileViewLabel}) => {
  const [input, setInput] = useState(state && state)
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!state && setNewInput) {
      setNewInput({
        ...newInput,
        number: input
      })
    }
  }, [input])

  const modifyText = (e) =>{
      if(state) {
        dispatch(modify(id, {number: input}))
        setIsEdit(false)
      } 
    }
    const secondaryClick = (e) =>{
      e.preventDefault()
      setIsEdit(false)
    }
  return (
    <>
    <label>{mobileViewLabel}</label>
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
    </>
  )
}
