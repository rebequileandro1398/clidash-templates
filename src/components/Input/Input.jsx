import React from 'react'

export const Input = ({type, setInput, value, accept, src, onBlur, onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
            src={src}
            accept={accept}
            type={type} 
            value={value}
            onBlur={onBlur}
            onChange={(e) => setInput(e.target.value)}
            />
      </form>
    </div>
  )
}
