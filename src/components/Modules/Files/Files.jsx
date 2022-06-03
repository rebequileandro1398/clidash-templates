import React, { useRef, useState } from 'react'
import './Files.scss'
import { Input } from '../../Input/Input'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const Files = ({state, id, newInput,  setNewInput}) => {
  const [input, setInput] = useState(state && state)
  const dispatch = useDispatch()
  const fileRef = useRef()
  const handleClick = (e) => {
      e.preventDefault();
      fileRef.current.click()
  }

  const handleChange =  (e) => {
    e.preventDefault();
    const [ file ] = e.target.files
    setInput(file)
    const fileReader = new FormData();
    fileReader.append('file', file)
    if(state) {
      dispatch(modify(id , {file: fileReader}))
    } else {
      setNewInput({
        ...newInput,
        file: fileReader
      })
    }
  }

  return (
    <div className='container-file'>
      <div className='file' onClick={(e) => handleClick(e)}>
        <p>{input?.name ? input.name : null}</p>
      </div> 
      <input 
        type='file'
        accept=".doc,.docx,.pdf,.xls"
        ref={fileRef} 
        style={{display: 'none'}}
        onChange={(e) => handleChange(e)}
        />
    </div>
  )
}