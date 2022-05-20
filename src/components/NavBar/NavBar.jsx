import React, { useState } from 'react'
import { Filters } from '../Filters/Filters'
import './NavBar.scss'
import { CalendarPicker } from '../CalendarPicker/CalendarPicker';
import calendar from '../../assets/calendar.svg'
import filter from '../../assets/filter.svg'
import plus from '../../assets/plus.svg'
import Export from '../../assets/Export.svg'


export const NavBar = () => {
    const [isOpenFilters, setIsOpenFilters] = useState(false)
    const [isOpenCalendar, setIsOpenCalendar] = useState(false)
  return (
    <div className='nav-bar'>
        <div className='paginated'>
            <p>Mostrar</p>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            <p>entradas</p>
        </div>
        <div>
            <form>
                <input className='input-search' type="search" name="" id="" placeholder='Buscar'/>
            </form>
        </div>
        <div className='calendar'>
            <button className='date-button' onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
                <img src={calendar} alt="calendar"/>
                Por fecha
            </button>
            {isOpenCalendar && 
            <CalendarPicker setIsOpen={setIsOpenCalendar}/>}
        </div>
        <div className='filter'>
            <button className='filter-button' onClick={() => setIsOpenFilters(!isOpenFilters)}>
                <img src={filter} alt="filter"/>
                Filtros
            </button>
            {isOpenFilters && <Filters/>}
        </div>
        <div>
            <button className='dark-button'>
                <img src={plus} alt="add"/>
                Anadir nuevo
            </button>
        </div>
        <div>
            <butto className='dark-button'>
                <img src={Export} alt="export"/>
                Exportar
            </butto>
        </div>
    </div>
  )
}
