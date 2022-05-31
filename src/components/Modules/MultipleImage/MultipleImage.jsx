import React, { useRef, useState } from 'react'
import './MultipleImage.scss'
import { Input } from '../../Input/Input'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const MultipleImage = ({ state, id}) => {
  const [preview, setPreview] = useState(state)
  const dispatch = useDispatch()
  const fileRef = useRef()

  const upLoadImage = (e, index) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {
          let image = [...preview]
          image[index] =  {photo: reader.result}
          setPreview(image)
          dispatch(modify(id, {images: image}))
          console.log(image)
        }
        reader.readAsDataURL(file)
      }
  }
  return (
    <div className='multiple-image'>
      {
      preview?.map(e => {
      let index = preview.findIndex(i => i.photo === e.photo)
      return <div>
          <img width={40} src={e.photo} alt='multiple image' onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()}}/>
          <input 
              accept='image/*'
              type="file" ref={fileRef} 
              style={{display: 'none'}}
              onChange={(e) => upLoadImage(e, index)}
              />
        </div>
      }) 
      }
    </div>
  )
}
