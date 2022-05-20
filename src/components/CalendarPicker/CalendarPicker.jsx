import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalendarPicker.scss'

export const CalendarPicker = ({setIsOpen}) => {
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className='container-calendar-picker'>
      <button className='isClosed'onClick={()=> setIsOpen(false)}>x</button>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        className='picker'
        selectsRange
        inline
      />
    </div>
  );
}
