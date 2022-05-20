import React, { useState } from 'react'
import { Filters } from '../Filters/Filters'
import './NavBar.scss'
import { CalendarPicker } from '../CalendarPicker/CalendarPicker';
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
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
            <button onClick={() => setIsOpen(!isOpen)} >Por fecha</button>
            {isOpen && 
            <CalendarPicker setIsOpen={setIsOpen}/>}
        </div>
        <div>
            <Filters/>
        </div>
        <div>
            <button>Anadir nuevo</button>
        </div>
        <div>
            <butto>Exportar</butto>
        </div>
    </div>
  )
}
