import React, { useState } from 'react'
import './Files.scss'
import { Input } from '../../Input/Input'
export const Files = ({edit, state}) => {
  const [input, setInput] = useState(state)
  
  return (
    <div>
      {
     !edit ? 
      <div>
        {input}
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
