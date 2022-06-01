import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortBy } from '../redux/Actions'
import './Filters.scss'
export const Filters = () => {
  const dispatch = useDispatch()
  const [sort, setSort] = useState('')
  
  const handleChange = (e) => {
    setSort(e.target.value)
   dispatch(sortBy(e.target.value))
  }
  return (
    <div className='filters-container'>
      <div className='sort-by-container'>
          <p>SORT BY:</p>
        <div className='options-container'>
         <div className="custom-radio">
          <h2>Default</h2>
            <input name="question" value="default-sort" type="radio" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="custom-radio">
            <h2>Alphabetically  {"(A-Z)"}</h2>
            <input name="question" value="a-z" type="radio" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="custom-radio">
          <h2>Reverse {"(Z-A)"}</h2>
            <input name="question" value="z-a" type="radio" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="custom-radio">
          <h2>Last Date</h2>
            <input name="question" value="last" type="radio" onChange={(e) => handleChange(e)}/>
          </div>
          <div className="custom-radio">
          <h2>Oldest Date</h2>
            <input name="question" value="oldest" type="radio" onChange={(e) => handleChange(e)}/>
          </div>
        </div>
      </div>
    </div>
  )
}
