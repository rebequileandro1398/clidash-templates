import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modifyImage } from '../../redux/Actions'
import './Image.scss'
export const Image = ({edit, state, id, setEdit}) => {
  const [preview, setPreview] = useState(state)
  const dispatch = useDispatch()

  const upLoadImage = () =>{
    dispatch(modifyImage(id, {image: preview}))
    setEdit(false)
  }
  const fileRef = useRef()
  return (
    <div>
      {
     !edit ?
      <img width={40} src={preview} alt=""/>
      :
        <div> 
          <button onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()
            }}>nueva imagen</button>
          <button onClick={() => upLoadImage()}>Ok</button>
          <input 
            accept='image/*'
            type="file" ref={fileRef} 
            style={{display: 'none'}}
            onChange={(e) => {
              const file = e.target.files[0];
              if(file && file.type.substring(0, 5) === 'image'){
                const reader = new FileReader()
                reader.onloadend = () => {
                  setPreview(reader.result)
                }
                reader.readAsDataURL(file)
              }
            }}
            />
        </div>
      }
    </div>
  )
}
