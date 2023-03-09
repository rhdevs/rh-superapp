import { useState } from 'react'
import dayjs from 'dayjs'

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')

dayjs.extend(isSameOrAfter)
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')

dayjs.extend(isSameOrBefore)

const FilterBar = function ({
  /* eslint-disable react/prop-types */
  ccaList,
  onNameFilter,
  onTypeFilter,
  onTagFilter,
  onCcaFilter,
  onStartFilter,
  onEndFilter,
}) {
  const [filters, setFilters] = useState({
    name: '',
    type: '',
    tags: '',
    startTime: '',
    endTime: '',
    cca: '',
  })

  const handleInput = (field) => (event) => {
    const { value } = event.target

    setFilters({
      ...filters,
      [field]: value,
    })

    switch (field) {
      case 'name':
        onNameFilter(value)
        break
      case 'type':
        onTypeFilter(value)
        break
      case 'tags':
        onTagFilter(value)
        break
      case 'startTime':
        onStartFilter(value)
        break
      case 'endTime':
        onEndFilter(value)
        break
      case 'cca':
        onCcaFilter(value)
        break
      default:
        break
    }
  }

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="name">
          Name
          <input
            type="text"
            className="form-control"
            id="name"
            value={filters.name}
            onChange={handleInput('name')}
          />
        </label>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="type">
          Type
          <select className="form-control" id="type" onChange={handleInput('type')}>
            <option value="event">Event</option>
            <option value="fundraiser">Fundraiser</option>
            <option value="announcement">Announcement</option>
          </select>
        </label>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="tags">
          Tags
          <select className="form-control" id="tags" onChange={handleInput('tags')}>
            <option value="sports">Sports</option>
            <option value="culture">Culture</option>
            <option value="committee">Committee</option>
            <option value="general">General</option>
          </select>
        </label>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startTime">
          Start Time
          <input
            type="date"
            className="form-control"
            id="startTime"
            onChange={handleInput('startTime')}
          />
        </label>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">
          End Time
          <input
            type="date"
            className="form-control"
            id="endTime"
            onChange={handleInput('endTime')}
          />
        </label>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="cca">
          CCA
          <select className="form-control" id="cca">
            <option value="">Select</option>
            {ccaList.map((cca) => (
              <option value={cca} key={cca}>
                {cca}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}

export default FilterBar
