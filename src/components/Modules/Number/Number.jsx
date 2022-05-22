import React, { useState } from 'react'
import { Input } from '../../Input/Input'
import './Number.scss'

export const Number = ({edit, state}) => {
    const [input, setInput] = useState(state)
  
  return (
    <div>
      {
     !edit ? 
      <div>
        <span>#{input}</span>
        </div> :
      <Input
        type={'number'} 
        setInput={setInput} 
        value={input}
        />
      }
    </div>
  )
}
