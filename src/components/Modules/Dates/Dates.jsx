import React, { useState } from 'react'
import './Dates.scss'
import { Input } from '../../Input/Input'
export const Dates = ({edit, initialState}) => {
  const [input, setInput] = useState(initialState)
  return (
    <div>
      {
     !edit ? <h1>{input}</h1> :
      <Input type={'date'} setInput={setInput} value={input}/>
      }
    </div>
  )
}
