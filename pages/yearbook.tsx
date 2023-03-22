import React from 'react'
import styled from 'styled-components'
import { Row } from 'antd'
import MonthCard from '@/components/archive/MonthCard'

// TODO: will want a more robust way of storing month data, depending on
// how archive information should be stored. That way we can go chronically through
// multiple years/months. Right now, purely for CSS demonstration.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const SAMPLE_IMAGE = 'https://wallpaperaccess.com/full/22501.png'

const YearbookPageContainer = styled.div`
  margin: 40px 20px 20px 20px;
`

const CardsRowContainer = styled.div`
  margin: -20px;
`

export default function Yearbook() {
  return (
    <YearbookPageContainer>
      <h1>Archive</h1>
      <h2>2023</h2>
      <CardsRowContainer>
        <Row>
          {MONTHS.map((monthStr: string) => (
            <MonthCard monthDisplayAbbreviation={monthStr} imageUrl={SAMPLE_IMAGE} key={monthStr} />
          ))}
        </Row>
      </CardsRowContainer>
    </YearbookPageContainer>
  )
}
