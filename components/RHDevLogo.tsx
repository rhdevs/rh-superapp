import React from 'react'

import { LeftArrow, LogoContainer, RightArrow, Line, MainContainer } from './styles/RHDevLogo.styled'

function RHDevLogo() {
  return (
    <MainContainer>
      <LogoContainer>
        <LeftArrow />
        <RightArrow />
        <Line />
      </LogoContainer>
    </MainContainer>
  )
}

export default RHDevLogo
