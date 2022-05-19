import React from 'react'

export const Input = ({type, setInput, value, accept}) => {
  return (
    <div>
        <input 
            accept={accept}
            type={type} 
            value={value} 
            onChange={(e) => setInput(e.target.value)}
            />
    </div>
  )
}
