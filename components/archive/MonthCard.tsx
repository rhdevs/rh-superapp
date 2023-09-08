import React from 'react'
import styled from 'styled-components'

const MonthCardContainer = styled.div`
  height: max(200px, 20vw);
  width: max(200px, 20vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  border-width: 2px;
  border-style: dashed;
  border-color: #000000;
  margin: 20px 20px 20px 20px;
  padding-top: 20px;
  background-color: #ffffff;
`
const ImageContainer = styled.div<{ image: string }>`
  height: max(150px, 15vw);
  width: max(150px, 15vw);
  background-image: url(${(props) => props.image});
`

const MonthText = styled.a`
  color: #000000;
  text-decoration: none;
`

type MonthCardProps = {
  monthDisplayAbbreviation: string
  imageUrl: string
  pageUrl: string
}

export default function MonthCard({ monthDisplayAbbreviation, imageUrl, pageUrl }: MonthCardProps) {
  return (
    <MonthCardContainer>
      <ImageContainer image={imageUrl} />
      <MonthText href={pageUrl}>
        <h2>{monthDisplayAbbreviation}</h2>
      </MonthText>
    </MonthCardContainer>
  )
}
