import React from 'react'
import '@/components/FilterFunction.css'

function FilterFunction(props) {
  function onFilterValueChanged(event) {
    console.log(event.target.value)
    props.filterValueSelected(event.target.value)
  }

  return (
    <div className="filter-area">
      <select name="NA" onChange={onFilterValueChanged}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailble">Unavailable</option>
      </select>
    </div>
  )
}

export default FilterFunction
