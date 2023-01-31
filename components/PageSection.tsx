import React from 'react'
import { StaticImageData } from 'next/image'
import { useTheme } from 'styled-components'
import {
  ImageContainer,
  MainContainer,
  TextContainer,
  Title,
  Body,
} from './styles/PageSection.styled'
import imgPlaceholder from '/assets/noimg.png'

type Props = {
  title: string
  description: string | React.ReactNode
  imgPosition?: 'left' | 'right' | undefined
  imageSrc?: StaticImageData
  events?: boolean
} & typeof defaultProps

const defaultProps: {
  imgPosition?: 'left' | 'right' | undefined
  imageSrc?: StaticImageData
  events?: boolean
} = {
  imgPosition: undefined,
  imageSrc: imgPlaceholder,
  events: false,
}

function PageSectionComponent(props: Props) {
  const theme = useTheme()
  const { sectionTitle, sectionText } = { ...theme.typography.fontSize }

  return (
    <MainContainer imgPosition={props.imgPosition}>
      {props.imgPosition && (
        <ImageContainer src={props.imageSrc ?? imgPlaceholder} alt={props.title} />
      )}
      <TextContainer>
        <Title fontType={sectionTitle} events={props.events}>
          {props.title}
        </Title>
        <Body fontType={sectionText} events={props.events}>
          {props.description}
        </Body>
      </TextContainer>
    </MainContainer>
  )
}

PageSectionComponent.defaultProps = defaultProps

export default PageSectionComponent
