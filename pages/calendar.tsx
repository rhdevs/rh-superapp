import styled from 'styled-components'
import { Events } from '@/components/LandingItems'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import NavBar from '@/components/NavBar'
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';

const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #0d699e;
  border-radius: 50%;
  display: inline-block;
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const datesToAddContentTo = [new Date('2023-11-14T12:00:00')];

function markedDot() {
  return (<Dot/>);
}  

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return markedDot();
    }
  }
}

export default function MyApp() {
  const [value, setValue] = useState(new Date())

  
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
       <NavBar />
        <h1>Calendar</h1>
        <Calendar onChange={onChange} value={value} tileContent={tileContent}/>
        <Events />
    </div>
  )
}
