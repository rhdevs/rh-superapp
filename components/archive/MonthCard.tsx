import React from 'react'
import styled from 'styled-components'

const MonthCardContainer = styled.div<{ backgroundImageSrc: string }>`
  height: max(200px, 20vw);
  width: max(200px, 20vw);
  background-image: url(${(props) => props.backgroundImageSrc});
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 20px 20px 20px 20px;
`

type MonthCardProps = {
  monthDisplayAbbreviation: string
  imageUrl: string
}

export default function MonthCard({ monthDisplayAbbreviation, imageUrl }: MonthCardProps) {
  return (
    <MonthCardContainer backgroundImageSrc={imageUrl}>
      <h2>{monthDisplayAbbreviation}</h2>
    </MonthCardContainer>
  )
}
