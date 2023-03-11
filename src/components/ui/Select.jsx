import React from 'react'

export const Select = ({name, options, filter, setFilter, setNewFilter, classes}) => {
  return (
    <div className={classes.divClass} style={{marginRight: "15px"}}>
        <label htmlFor="year" className={classes.labelClass}>{name}</label>
        <select name="year" id='year' value={filter} onChange={(e) => setFilter(setNewFilter(e))}>
            {options.map(item => <option value={item.value} key={item.value}>{item.valueTag}</option>)}
        </select>
    </div>
  )
}
