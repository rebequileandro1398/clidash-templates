import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSheetData, removeSheetData } from '../../redux/Actions'
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch'
import './CheckBox.scss'
export const CheckBox = ({id}) => {
  const dispatch = useDispatch()

  const checked = (e) => {
    if(e.target.checked){
      dispatch(addSheetData(id))
    } else {
      dispatch(removeSheetData(id))
    }
  }
  return (
    <div className='container-checkbox'>
        <input className='checkbox' type="checkbox" onChange={(e) => checked(e)}/>
    </div>
  )
}
