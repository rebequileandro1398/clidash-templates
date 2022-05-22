import React, { useState } from 'react'
import './MultipleImage.scss'
import { Input } from '../../Input/Input'
export const MultipleImage = ({edit, state}) => {
  const [input, setInput] = useState(state)
  return (
    <div className='multiple-image'>
      {
     !edit ? input?.map(e => (<img width={40} src={e.photo} alt='multiple image'/>)) :
      <Input type={'file'} />
      }
    </div>
  )
}
