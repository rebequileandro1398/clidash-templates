import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import camera from '../../../assets/Camera.svg'
import { modify } from '../../redux/Actions'
import './Image.scss'
export const Image = ({edit, state, id, setNewInput, newInput}) => {
  const [preview, setPreview] = useState(state ? state : camera)
  const dispatch = useDispatch()
  const fileRef = useRef()

  const upLoadImage = (e) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result)
          if(state) {
            dispatch(modify(id, {image: reader.result}))
          } else {
            setNewInput({
              ...newInput,
              image: reader.result
            })
          }
        }
        reader.readAsDataURL(file)
      }
  }
  return (
    <div className='container-image'>
        <div> 
          <img src={preview} alt="selleccione" 
            onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()}}/>
            <input 
              accept='image/*'
              type="file" 
              ref={fileRef} 
              style={{display: 'none'}}
              onChange={(e) => upLoadImage(e)}
              />
        </div>
    </div>
  )
}
