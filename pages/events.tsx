import Events from '@/pages/sample-rhdevs-website/events'
import eventList from '@/texts/common/dummyEventList'
import './app.css'
import FilterFunction from '@/components/sample-rhdevs-website/FilterFunction/FilterFunctionID'
import { useState } from 'react'
import FilterBar from '@/components/sample-rhdevs-website/FilterFunction/FilterBar'
import dayjs from "dayjs"

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export default function Event() {

  const [allEvents, setEvents] = useState(eventList);

  const generateCCAForDropdown = () => {
    let s = new Set<string>(eventList.map((event) => event.cca))
    return s
  }

  const handleFilterName = (name) => {
    const filteredEvents = eventList.filter((event) => {
        if(event.name == name){
          return event
        }
    })

    setEvents(filteredEvents)
  }

  const handleFilterType = (type) => {
    const filteredEvents = eventList.filter((event) => {
        if(event.type == type){
          return event
        }
    })

    setEvents(filteredEvents)
  }

  const handleFilterTag = (tag) => {
    const filteredEvents = eventList.filter((event) => {
        if(event.tags == tag){
          return event
        }
    })

    setEvents(filteredEvents)
  }

  const handleFilterCca = (cca) => {
    const filteredEvents = eventList.filter((event) => {
        if(event.cca == cca){
          return event
        }
    })

    setEvents(filteredEvents)
  }

  const handleFilterStartTime = (date, field) => {
    const filteredEvents = eventList.filter((event) => {
        if(field == "startTime" && event.startTime > date){
          return event
        }
    })

    setEvents(filteredEvents)
  }

  const handleFilterEndTime = (date, field) => {
    const filteredEvents = eventList.filter((event) => {
        if(field == "startTime" && event.endTime < date){
          return event
        }
    })

    setEvents(filteredEvents)
  }

  return (
    <>
      <div style = {{backgroundColor: 'white', padding: '10px 20px', borderRadius: 2}}>
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
