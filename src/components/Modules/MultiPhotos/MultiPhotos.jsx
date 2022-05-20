import React, { useState } from 'react'
import './MultiPhotos.scss'
import { Input } from '../../Input/Input'
export const MultiPhotos = ({edit}) => {
  const [input, setInput] = useState()
  return (
    <div>
      {
     !edit ? <h1>{input}</h1> :
      <Input type={'file'} setInput={setInput} value={input}/>
      }
    </div>
  )
}
