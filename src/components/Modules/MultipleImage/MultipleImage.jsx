import React, { useEffect, useId, useRef, useState } from 'react'
import './MultipleImage.scss'
import camera from '../../../assets/Camera.svg'
import { Image } from './Image'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const MultipleImage = ({ state, id, newInput, setNewInput, mobileViewLabel}) => {
  const fileRef = useRef()
  const dispatch = useDispatch()
  const [preview, setPreview] = useState([
    {
      photo: camera,
      id: new Date().getTime() + 1
    },
    {
      photo: camera,
      id: new Date().getTime() + 2
    }, 
    {
      photo: camera,
      id: new Date().getTime() + 3
    }
  ])
  
  useEffect(() => {
    if(state){
      let newstate = []
      let acc = 1
      state?.map(e => {
        newstate.push({
          photo: e.photo,
          id: new Date().getTime() + acc
        })
        acc ++;
      })
      setPreview(newstate)
    }
  }, [])  

  const upLoadImage = (e) =>{
    const file = e.target.files[0];
    if(file && file.type.substring(0, 5) === 'image'){
      const reader = new FileReader()
      reader.onloadend = () => {
          let newImage = [...preview]
          newImage.push({
            photo: reader.result,
            id: new Date().getTime()
          })
          setPreview(newImage)

          dispatch(modify(id, {images: newImage}))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
    <label>{mobileViewLabel}</label>
    <div className='multiple-image'>
      {
      preview?.map(e => {
      let index = preview.findIndex(i => i.id === e.id)
      return <Image
              key={e.id}
              index={index}
              image={e.photo}
              preview={preview}
              setPreview={setPreview}
              newInput={newInput}
              setNewInput={setNewInput}
              id={id}
              state={state}
              />
      }) 
      }
        <button className='add' onClick={() => fileRef.current.click()}>+</button>
        <input 
          accept='image/*'
          type="file" ref={fileRef} 
          style={{display: 'none'}}
          onChange={(e) => upLoadImage(e)}
          />
    </div>
    </>
  )
}
