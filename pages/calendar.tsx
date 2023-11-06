import styled from 'styled-components'
import { Events } from '@/components/LandingItems'
import React, { useState } from 'react'
import Calendar from 'react-calendar'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function MyApp() {
  const [value, setValue] = useState(new Date())

  function onChange(nextValue) {
    setValue(nextValue)
  }

  return (
    <div>
      <PageWrapper>
        <h1>WheeWhoo!</h1>
        <Calendar onChange={onChange} value={value} />
        {/* <Events /> */}
      </PageWrapper>
    </div>
  )
}
