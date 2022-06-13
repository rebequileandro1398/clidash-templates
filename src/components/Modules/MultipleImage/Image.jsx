import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'

export const Image = ({state, image, preview, id, index, setPreview, newInput, setNewInput}) => {
  const dispatch = useDispatch()

    const fileRef = useRef()
    const upLoadImage = (e) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {
          let newImage =  preview.map(e => {
            if(e.id === preview[index].id) {
              
              e.photo = reader.result
            }
            return e
          })
          setPreview(newImage)
          if(state) {
            dispatch(modify(id, {images: newImage}))
          } else {
        
            setNewInput({
              ...newInput,
              images: preview
            })
          }
        }
        reader.readAsDataURL(file)
      }
  }
  return (
     <div>
        <img width={40} src={image} alt='multiple' onClick={(e)=> {
          e.preventDefault();
          fileRef.current.click()}}/>
        <input 
          accept='image/*'
          type="file" ref={fileRef} 
          style={{display: 'none'}}
          onChange={(e) => upLoadImage(e)}
          />
    </div>
  )
}
