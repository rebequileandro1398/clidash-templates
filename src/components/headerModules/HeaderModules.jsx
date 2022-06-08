import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({head}) => {
  return (
    <div className='header-modules-container'>
        <div className='text-container'>
            {head?.map(title => (
                <div key={title.name} className='item'>
                    <h3>{title.name}</h3>
                    {title?.image && <img src={title.image} alt='arrow'/>}
                </div>
            ))}
        </div>
    </div>
  )
}
