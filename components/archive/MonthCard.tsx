import React from 'react'
import styled from 'styled-components'

const MonthCardContainer = styled.div<{ backgroundImageSrc: string }>`
    height: 500px;
    width: 500px;
    background-image: url(${(props) => props.backgroundImageSrc})
    display: flex;
    alignItems: center;
    justifyContent: center;
`

const MonthTextLabel = styled.h2`
  font-size: 18px;
`

type MonthCardProps = {
  monthDisplayAbbreviation: string
  imageUrl: string
}

const MonthCard = ({ monthDisplayAbbreviation, imageUrl }: MonthCardProps): React.ReactElement => {
  return (
    <MonthCardContainer backgroundImageSrc={imageUrl}>
      <MonthTextLabel>{monthDisplayAbbreviation}</MonthTextLabel>
    </MonthCardContainer>
  )
}

export default MonthCard
