import React, { useState } from 'react'
import './ImageAndText.scss'
import { Input } from '../../Input/Input'
export const ImageAndText = ({edit, image, text}) => {
  const [input, setInput] = useState({
    image: image,
    text: text
  })
  
  return (
    <div>
      {
     !edit ? 
      <div>
        <img src={image}/>
       <h1>{input.text}</h1>
      </div> :
      <Input 
        type={'text'} 
        setInput={setInput.text} 
        value={input}
        />
      }
    </div>
  )
}
