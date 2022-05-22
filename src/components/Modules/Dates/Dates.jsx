import React, { useState } from 'react'
import './Dates.scss'
import { Input } from '../../Input/Input'
export const Dates = ({edit, state}) => {
  const [input, setInput] = useState(state)
  return (
    <div>
      {
     !edit ? <h3>{input}</h3> :
      <Input type={'date'} setInput={setInput} value={input}/>
      }
    </div>
  )
}
