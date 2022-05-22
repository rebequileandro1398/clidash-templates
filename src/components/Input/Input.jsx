import React from 'react'

export const Input = ({type, setInput, value, accept, src, onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
            src={src}
            accept={accept}
            type={type} 
            value={value}
            onChange={(e) => setInput(e.target.value)}
            />
      </form>
    </div>
  )
}
