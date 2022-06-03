import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CheckBox } from '../Modules/CheckBox/CheckBox'
import { Dates } from '../Modules/Dates/Dates'
import { Files } from '../Modules/Files/Files'
import { Image } from '../Modules/Image/Image'
import { ImageAndText } from '../Modules/ImageAndText/ImageAndText'
import { MultipleImage } from '../Modules/MultipleImage/MultipleImage'
import { Number } from '../Modules/Number/Number'
import { MultiSelect } from '../Modules/Select/MultiSelect'
import { Select } from '../Modules/Select/Select'
import { Text } from '../Modules/Text/Text'
import { newElement } from '../redux/Actions'
import './NewLine.scss'
export const NewLine = ({selectOptions}) => {
    const dispatch = useDispatch()
    const [newInput, setNewInput] = useState({
        id: new Date().getTime(),
        name:'',    //text
        number:'',  //number
        status:'',  //select
        multiple: [], //multiSelect   
        image:'',   //image
        images:'', //multiImage
        profile:{   //imageAndText
            photo:'',
            name:''
        },
        file:'', //files
        date:'' //dates

    })
    const handleSubmit = (e) => {
          e.preventDefault()
          dispatch(newElement(newInput))
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
    <div className='save'>
     <button onClick={(e) => handleSubmit(e)}>Guardar</button>
    </div>
  </div>
  )
}
