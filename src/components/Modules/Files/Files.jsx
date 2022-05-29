import React, { useState } from 'react'
import './Files.scss'
import { Input } from '../../Input/Input'
export const Files = ({edit, state}) => {
  const [input, setInput] = useState(state)
  const [isEdit, setIsedit] = useState(false)
  return (
    <div className='container-file'>
      {
     !isEdit ?
      <div className='file'>
        <p>{input}</p>
      </div> :
      <Input 
        accept={".doc,.docx,.pdf,.xls"}
        type={'file'} 
        setInput={setInput} 
        value={input}
        />
      }
    </div>
  )
}
