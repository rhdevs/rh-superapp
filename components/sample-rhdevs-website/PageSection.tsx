import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import styled, { keyframes, FontType, useTheme } from 'styled-components'
import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'
import imgPlaceholder from '@/public/assets/noimg.png'
import { stringToSlug } from '@/utils/stringToSlug'

const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: none;
    }
`

export const MainContainer = styled.div<{
  imgPosition?: 'left' | 'right'
  responsiveReverse?: boolean
}>`
  justify-content: space-between;
  animation-duration: 1s;
  animation-name: ${fadeInUp};
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: ${(props) => props.imgPosition && 'auto'} auto;
  grid-template-areas: '${(props) => props.imgPosition === 'left' && 'image'} text ${(props) =>
    props.imgPosition === 'right' && 'image'}';

  @media screen and (min-width: 700px) {
    gap: 5rem;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: ${(props) => (props.responsiveReverse ? 'column-reverse' : 'column')};
    align-items: flex-start;
    padding: 0;
    gap: 1rem;
    margin-bottom: 50px;
  }
`

export const ImageContainer = styled.div`
  object-fit: contain;
  max-height: 350px;
  max-width: 350px;
  grid-area: image;

  @media screen and (max-width: 700px) {
    margin: 0 0 40px 0;
    width: 80%;
  }
`

export const TextContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const Title = styled.h1<{ events?: boolean; fontType: FontType }>`
  color: ${(props) => (props.events ? 'Black' : props.theme.palette.primary)};
  ${fontTypeCss}
  margin-block: 0;
`

export const Body = styled.p<{ events?: boolean; fontType: FontType }>`
  ${(props) => `color: ${props.theme.palette.common.black};`}
  font-size: 1.1rem;
  white-space: pre-wrap;
  margin: 0;
  text-align: justify;
`

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
        <ImageContainer>
          <Image
            src={props.imageSrc?.src ?? imgPlaceholder}
            height={300}
            width={300}
            alt={props.title}
            // priority={false}
          />
        </ImageContainer>
      )}
      <TextContainer>
        <Link href={'events/' + stringToSlug(props.title)}>
          <Title fontType={sectionTitle} events={props.events}>
            {props.title}
          </Title>
        </Link>

        <Body fontType={sectionText} events={props.events}>
          {props.description}
        </Body>
      </TextContainer>
    </MainContainer>
  )
}

PageSectionComponent.defaultProps = defaultProps

export default PageSectionComponent
