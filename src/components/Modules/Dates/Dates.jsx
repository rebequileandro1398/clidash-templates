import React, { useState } from 'react'
import './Dates.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Dates = ({state}) => {
  const [startDate, setStartDate] = useState(new Date(state));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='date-container'>
      {
     !isOpen ? 
     <div className='date' onClick={() => setIsOpen(true)}>
       <span>{startDate.toLocaleDateString()}</span> 
     </div>
      :
      <div onContextMenu={(e) => {
        e.preventDefault()
        setIsOpen(false)
        }}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      </div>
      }
    </div>
  )
}
