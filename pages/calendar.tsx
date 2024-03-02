import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import NavBar from '@/components/NavBar'
import 'react-calendar/dist/Calendar.css'
import { differenceInCalendarDays, format } from 'date-fns'
import { dummyData } from '@/texts/common/dummy'
import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'

const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #0d479e;
  border-radius: 50%;
  display: inline-block;
`

const PageWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

const CalendarWrapper = styled.div`
  max-height: fit-content;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 20px 0px 20px;
  width: 100%;
`

const EventItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px 0;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

function markedDot() {
  return (
    <div>
      <Dot />
    </div>
  )
}

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0
}

export default function MyApp() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const defaultList = dummyData
  const [eventsArr, setEventsArr] = useState(defaultList)

  useEffect(() => {
    console.log('Selected date changed!')
    const filtered = defaultList.filter((event) => {
      return isSameDay(event.startTime, selectedDate) ? event : null
    })
    setEventsArr(filtered)
  }, [selectedDate, defaultList])

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  function tileContent({ date, view }) {
    if (view === 'month') {
      if (defaultList.find(({ startTime }) => isSameDay(startTime, date))) {
        return markedDot()
      }
    }
  }

  return (
    <PageWrapper>
      <NavBar />
      <h1>Events Calendar</h1>
      <ContentWrapper>
        <CalendarWrapper>
          <Calendar onClickDay={handleDateClick} value={selectedDate} tileContent={tileContent} />
        </CalendarWrapper>
        <InnerWrapper>
          <h2>
            Events on&nbsp;
            {selectedDate ? format(selectedDate, 'do MMM yyyy') : format(new Date(), 'do MMM yyyy')}
          </h2>
          {eventsArr.length > 0 ? (
            eventsArr.map((event, index) => (
              <EventItem key={index}>
                <PageSectionComponent
                  title={event.name}
                  description={event.description}
                  imgPosition={'left'}
                  imageSrc={event.image}
                  signUpLink={event.signUpLink}
                  photoLink={event.photoLink}
                  events
                />
              </EventItem>
            ))
          ) : (
            <p>No events for this date.</p>
          )}
        </InnerWrapper>
      </ContentWrapper>
    </PageWrapper>
  )
}
