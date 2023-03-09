import eventList from '@/texts/common/dummyEventList'
import { useState } from 'react'
import FilterBar from '@/components/sample-rhdevs-website/FilterFunction/FilterBar'
import dayjs from 'dayjs'

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export default function Event() {
  // eslint-disable-next-line no-use-before-define
  const [, setEvents] = useState(eventList)

  const generateCCAForDropdown = () => {
    const s = new Set<string>(eventList.map((event) => event.cca))
    return Array.from(s.values())
  }

  const handleFilterName = (name) => {
    const filteredEvents = eventList.filter((event) => event.name === name)

    setEvents(filteredEvents)
  }

  const handleFilterType = (type) => {
    const filteredEvents = eventList.filter((event) => event.type === type)

    setEvents(filteredEvents)
  }

  const handleFilterTag = (tag) => {
    const filteredEvents = eventList.filter((event) => event.tags === tag)

    setEvents(filteredEvents)
  }

  const handleFilterCca = (cca) => {
    const filteredEvents = eventList.filter((event) => event.cca === cca)

    setEvents(filteredEvents)
  }

  const handleFilterStartTime = (date, field) => {
    const filteredEvents = eventList.filter(
      (event) => field === 'startTime' && event.startTime > date,
    )

    setEvents(filteredEvents)
  }

  const handleFilterEndTime = (date, field) => {
    const filteredEvents = eventList.filter(
      (event) => field === 'startTime' && event.endTime < date,
    )

    setEvents(filteredEvents)
  }

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: 2 }}>
        Events page (TODO)
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <FilterBar
              ccaList={generateCCAForDropdown}
              onNameFilter={handleFilterName}
              onTypeFilter={handleFilterType}
              onTagFilter={handleFilterTag}
              onCcaFilter={handleFilterCca}
              onStartFilter={handleFilterStartTime}
              onEndFilter={handleFilterEndTime}
            />
          </div>
        </div>
      </div>
    </>
  )
}
