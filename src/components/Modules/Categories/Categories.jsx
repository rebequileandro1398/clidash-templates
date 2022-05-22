import React, { useState } from 'react'
import './Categories.scss'
export const Categories = ({edit, state}) => {
    const [input, setInput] = useState(state)
  return (
    <div>
        {!edit ?
        <div>
            <button>{input}</button>
        </div>:
        <select>
            <option>1</option>
        </select>
        }
    </div>
  )
}
