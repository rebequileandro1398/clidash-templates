import React, { useState } from 'react'
import { Input } from '../../Input/Input'
import './Image.scss'
export const Image = ({edit, state}) => {
  const [input, setInput] = useState(state)
  
  return (
    <div>
      {
     !edit ?
      <input type='image' width={40} src={input} alt=""/>
      :
      <Input setInput={setInput} type={'file'}/>
      }
    </div>
  )
}
