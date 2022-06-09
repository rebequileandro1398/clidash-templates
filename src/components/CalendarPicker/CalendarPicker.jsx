import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { getData, searchDataRange } from '../redux/Actions';
import './CalendarPicker.scss'

export const CalendarPicker = ({setIsOpen}) => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      if(start && end) {
        dispatch(searchDataRange({startDate: start, endDate: end}))
        }
    };
  const hadleClick = () => {
    dispatch(getData())
    setIsOpen(false)
  }
  return (
    <div className='container-calendar-picker'>
      <button className='isClosed'onClick={()=> hadleClick()}>x</button>
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
