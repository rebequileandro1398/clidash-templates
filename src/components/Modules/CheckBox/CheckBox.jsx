import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSheetData, removeSheetData } from '../../redux/Actions'
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch'
import './CheckBox.scss'
export const CheckBox = ({id}) => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const handleToggleSwitch = (e) => {
      setToggle(e.target.checked)
  }
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
        <ToggleSwitch
          checked={toggle}
          onChange={handleToggleSwitch}
          />
    </div>
  )
}
