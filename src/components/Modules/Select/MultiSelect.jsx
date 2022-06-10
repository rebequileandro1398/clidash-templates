import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
import './Select.scss'

export const MultiSelect = ({state, options, id, newInput, setNewInput}) => {

  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()
  const [input, setInput] = useState(state ? state : [])
  const [preview, setPreview] = useState([])
  
  useEffect(() => {
    let newstate = []
    state?.map(e => {
      const elements = options?.filter(i => i.text === e)
      newstate?.push(elements[0])
    })
    setPreview(newstate)
  }, [options])

  const modifySelect = (element) =>{
    dispatch(modify(id, {multiple: element}))
    setIsEdit(false)
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }
  const onHandleChange = (value, color) => {
    const exists = preview.filter(e => e.text === value)
    if(!exists.length){
      if(state) {
        setPreview([...preview, {
          text: value,
          color: color
        }])
        setInput(input.concat(value))
        modifySelect(input.concat(value))
      } else {
        setPreview([...preview, {
          text: value,
          color: color
        }])
        setInput(input.concat(value))
        let newValue = [...input]
        newValue = newValue.concat(value)
        console.log(newValue)
        setNewInput({
          ...newInput,
          multiple: newValue
        })
        setIsEdit(false)
      }
    }
  }
 

  const remove = (index) => {
    let removePreview = preview.filter(e => e !== preview[index])
    let removeElement = input.filter(e => e !== input[index])
    setPreview(removePreview)
    setInput(removeElement)
    if(state) {
      modifySelect(removeElement)
      setNewInput()
    } 
  }
  return (
    <div className='container-categories'>
      <div className='container'>
        <div className='container-elements'>
          {!preview.length && <button className='plus'>+</button>}
              {preview?.map(element => {
                let indexInput = preview.findIndex(i => i === element)
                return <div key={indexInput} className='selected-container'>
                  <button 
                    onClick={() => remove(indexInput)}
                    className={`remove ${element?.color}`}>x</button>
                  <button 
                    onClick={() => setIsEdit(true)}
                    className={`${element?.color}-button`}>
                    <p>{element?.text}</p>
                  </button>
                </div>
              })
            }
        </div>
      </div>
      {isEdit &&
          <div className='select-box'
          onContextMenu={(e) => secondaryClick(e)}
          >
            {options?.map(e => {
              let index = options.findIndex(i => i === e)
              return <button 
                onClick={() => onHandleChange(e.text, e.color)} 
                className={`${e.color}-button`}>
                {e.text}
              </button>
            })
            }
        </div>
      }
    </div>
  )
}
