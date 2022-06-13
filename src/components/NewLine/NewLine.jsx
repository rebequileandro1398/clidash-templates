import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dates } from '../Modules/Dates/Dates'
import { Files } from '../Modules/Files/Files'
import { Image } from '../Modules/Image/Image'
import { ImageAndText } from '../Modules/ImageAndText/ImageAndText'
import { MultipleImage } from '../Modules/MultipleImage/MultipleImage'
import { Number } from '../Modules/Number/Number'
import { MultiSelect } from '../Modules/Select/MultiSelect'
import { Select } from '../Modules/Select/Select'
import { Text } from '../Modules/Text/Text'
import { ToggleSwitch } from '../Modules/ToggleSwitch/ToggleSwitch'
import { newElement } from '../redux/Actions'
import './NewLine.scss'
export const NewLine = ({selectOptions, setNewLine}) => {
    const dispatch = useDispatch()
    const initialState = {
     id: new Date().getTime(),
     name:'',    //text
     number:'',  //number
     status:'',  //select
     multiple: [], //multiSelect   
     image:'',   //image
     images:[], //multiImage
     profile:{   //imageAndText
         photo:'',
         name:''
     },
     file:'', //files
     date:'', //dates
     state: false
    }
    const [newInput, setNewInput] = useState(initialState)
    const handleSubmit = (e) => {
          e.preventDefault()
          dispatch(newElement(newInput))
          .then(() => {
               setNewInput(initialState)
               setNewLine(false)
          })
    }

  return (
    <div className='container-line' id='new-line'>

    <Text 
        setNewInput={setNewInput} 
        newInput={newInput}
    />

    <Number
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <Select 
         setNewInput={setNewInput} 
         newInput={newInput}
         options={selectOptions}
    />

    <MultiSelect
         setNewInput={setNewInput} 
         newInput={newInput}
         options={selectOptions}
    />

    <Image
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <MultipleImage
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <ImageAndText
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <Files
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <Dates
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <ToggleSwitch
     setNewInput={setNewInput} 
     newInput={newInput}
     />
    <div className='save'>
     <button onClick={(e) => handleSubmit(e)}>Guardar</button>
    </div>
  </div>
  )
}
