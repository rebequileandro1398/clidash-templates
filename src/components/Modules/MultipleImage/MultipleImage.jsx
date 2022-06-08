import React, { useEffect, useId, useRef, useState } from 'react'
import './MultipleImage.scss'
import camera from '../../../assets/Camera.svg'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const MultipleImage = ({ state, id}) => {
  const [preview, setPreview] = useState(state ? state : [{photo: camera}, {photo: camera}, {photo: camera}])
  const dispatch = useDispatch()
  const fileRef = useRef()
  useEffect(() => {
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
  }, [])  


  const upLoadImage = (e, index) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {
          let image = [...preview]
          image[index].photo = reader.result
          console.log(image)
          setPreview(image)
          //dispatch(modify(id, {images: image}))
        }
        reader.readAsDataURL(file)
      }
  }
  return (
    <div className='multiple-image'>
      {
      preview?.map(e => {
      let index = preview.findIndex(i => i.id === e.id)
      return <div key={e.id}>
          <img width={40} src={e.photo} alt='multiple' onClick={(e)=> {
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
