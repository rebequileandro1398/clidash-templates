import React, { useState } from 'react'
import { Filters } from '../Filters/Filters'
import './NavBar.scss'
import { CalendarPicker } from '../CalendarPicker/CalendarPicker';
import calendar from '../../assets/calendar.svg'
import filter from '../../assets/filter.svg'
import plus from '../../assets/plus.svg'
import Export from '../../assets/Export.svg'
import { HeaderModules } from '../headerModules/HeaderModules';
import arrows from '../../assets/arrows.svg'
import logo from '../../assets/LOGO.svg'
import searchIcon from '../../assets/search.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getData, onSearch } from '../redux/Actions';
import filters from '../../assets/filters.svg'
import * as XLSX from 'xlsx/xlsx.mjs'
export const NavBar = ({setPostPerPage, selectNumber, postPerPage, setNewLine, newLine}) => {
    const dispatch = useDispatch()
    const [isOpenFilters, setIsOpenFilters] = useState(false)
    const [isOpenCalendar, setIsOpenCalendar] = useState(false)
    const [mobileFiltes, setMobileFilters] = useState(false)
    const [search, setSearch] = useState('')
    const sheetData = useSelector(state => state.sheetData)
    let select = []
    for (let i = 1; i < selectNumber.length; i ++) {
        select.push({n: i})
    }
    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        dispatch(onSearch(e.target.value))
    }
    const handleOnExport = () => {
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(sheetData);
        XLSX.utils.book_append_sheet(wb, ws, "table");
        XLSX.writeFile(wb, "clidashTemplate.xlsx");
    }
    const handleClickNew = () => {
        setNewLine(!newLine)
    }
    const reset = () => {
        dispatch(getData())
        setMobileFilters(false)
    }
  return (
      <>
        <div className='nav-bar'>
            <div className='horizontal-line'> 
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='paginated'>
                    <p>Mostrar</p>
                        <select onChange={(e)=> setPostPerPage(e.target.value)} value={postPerPage}>
                            {select.map((e) => <option key={e.n}>{e.n}</option>
                            )}
                        </select>
                    <p>entradas</p>
                </div>
                <div>
                    <form>
                        <input 
                            onChange={(e) => handleChange(e)}
                            className='input-search' 
                            type="search" value={search} 
                            placeholder='Buscar'/>
                        <img src={searchIcon} alt="search"/>
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
                <div className='new-line'>
                    <button className='dark-button' onClick={() => handleClickNew()}>
                        <img src={plus} alt="add"/>
                        Anadir nuevo
                    </button>
                </div>
                <div className='export'>
                    <button className='dark-button' onClick={() => handleOnExport()}>
                        <img src={Export} alt="export"/>
                        Exportar
                    </button>
                </div>
            </div>
            <div className='labels'>
                <div className='horizontal-line'>
                <HeaderModules 
                    head={[
                        {name:'text'}, 
                        {name:'n??mero', image:arrows},
                        {name:'categorias', image: arrows}, 
                        {name:'multiseleccion', image: arrows}, 
                        {name:'foto'}, 
                        {name:'multifoto'}, 
                        {name:'foto y texto', image: arrows}, 
                        {name:'archivo'}, 
                        {name:'check'},
                        {name:'fecha', image: arrows}
                        ]}/>
                </div>
            </div>
        </div>


        <div className='mobile-filters'>
            <div className='filters'>
                <button className='dark-button' onClick={() => setMobileFilters(!mobileFiltes)}>
                <img src={filters} alt="filter"/>
                        Filtros
                </button>
            </div>
            <div className='mobile-export' onClick={() => handleOnExport()}>
                <button className='dark-button'>
                <img src={Export} alt="export"/>
                        Exportar
                </button>
            </div>
          {mobileFiltes &&
            <div className='filters-calendar'>
                <div className='header'>
                    <h1>Filtrar por</h1>
                    <button className='reset'onClick={() => reset()}>Borrar todo</button>
                    <button className='closed' onClick={() => setMobileFilters(false)}>X</button>
                </div>
                <div>
                    <CalendarPicker/>
                </div>
                <div className='filter-component'>
                 <Filters/>
                </div>
            </div>}
        </div>
      </>
  )
}
