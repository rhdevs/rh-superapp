import React from 'react'
import styled from 'styled-components'
import { Row } from 'antd'
import MonthCard from '@/components/archive/MonthCard'
import NavBar from '@/components/NavBar'

// TODO: will want a more robust way of storing month data, depending on
// how archive information should be stored. That way we can go chronically through
// multiple years/months. Right now, purely for CSS demonstration.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const SAMPLE_IMAGE = 'https://wallpaperaccess.com/full/22501.png'

const YearbookPageContainer = styled.div`
  margin: 40px 20px 20px 20px;
  background-cover: url('/assets/bg.jpg');
  justify-content: center;
  position: fixed;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`

const CardsRowContainer = styled.div`
  margin: -20px;
`

export default function Yearbook() {
  return (
    <>
      <NavBar />
      <YearbookPageContainer>
        <TitleContainer>
          <img src="/assets/yearbook.png" alt="Yearbook Title" />
        </TitleContainer>
        <CardsRowContainer>
          <Row>
            {MONTHS.map((monthStr: string) => (
              <MonthCard
                monthDisplayAbbreviation={monthStr}
                imageUrl={SAMPLE_IMAGE}
                pageUrl="https://www.google.com"
                key={monthStr}
              />
            ))}
          </Row>
        </CardsRowContainer>
      </YearbookPageContainer>
    </>
  )
}
