import React, { useState } from 'react'
import './Dates.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import { modify } from '../../redux/Actions';

export const Dates = ({id, state,  setNewInput, newInput, mobileViewLabel}) => {
  const [startDate, setStartDate] = useState(state ? new Date(state && state) : new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const onInputChange = (date) => {
      setStartDate(date)
    if(state) {
      dispatch(modify(id, {date: date}))
    } else {
      setNewInput({
        ...newInput,
        date: date
      })
    }
    setIsOpen(false)
  }


  return (
    <>
    <label>{mobileViewLabel}</label>
    <div className='date-container'>
      {
     !isOpen && state? 
     <div className='date' onClick={() => setIsOpen(true)}>
       <span>{startDate.toLocaleDateString()}</span> 
     </div>
      :
      <div className='calendar-picker' onContextMenu={(e) => {
        e.preventDefault()
        setIsOpen(false)
        }}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => onInputChange(date)}
      />
      </div>
      }
    </div>
    </>
  )
}
