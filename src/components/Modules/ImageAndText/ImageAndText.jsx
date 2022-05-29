import React, { useRef, useState } from 'react'
import './ImageAndText.scss'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const ImageAndText = ({ state, id}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [input, setInput] = useState({
    photo: state.photo,
    name: state.name
  })

  const dispatch = useDispatch()
  const fileRef = useRef()

  const upLoadImage = (e) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {
          setInput({
            ...input,
            photo: reader.result})
          dispatch(modify(id, { profile: {
              photo: reader.result,
              name: input.name
          }}))
        }
        reader.readAsDataURL(file)
      }
  }
  const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(modify(id, { profile: {
          photo: input.photo,
          name: input.name
      }}))
      setIsEdit(false)
  }
  const noEdit = (e) => {
    e.preventDefault()
    setIsEdit(false)
  }

  return (
    <div className='container-image-text'>
          <img src={input.photo} alt="selleccione" onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()}}/>
            <input 
              accept='image/*'
              type="file" ref={fileRef} 
              style={{display: 'none'}}
              onChange={(e) => upLoadImage(e)}
              />
          <div className='input-text' 
            onClick={() => setIsEdit(true)} 
            onContextMenu={(e) => noEdit(e)}>
            { isEdit ? <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                type="text" 
                value={input.name}
                onChange={(e) => setInput({...input, name: e.target.value})}
                />
              </form> : <span>{input.name}</span>
              }
          </div>
    </div>
  )
}
