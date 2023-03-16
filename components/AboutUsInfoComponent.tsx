import React from 'react'
import styled, { useTheme, keyframes, FontType, css } from 'styled-components'
import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const InfoComponentText = styled.div<{ hasAnimation?: boolean; fontType: FontType }>`
  ${fontTypeCss}
  margin-top: 20px;
  color: ${(props) => props.theme.palette.common.black};
  ${(props) =>
    props.hasAnimation &&
    css`
      animation-name: ${fadeIn};
      animation-delay: 1s;
      animation-duration: 1.5s;
      animation-fill-mode: both;
    `}
`

const InfoComponentTitle = styled.label<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.black};
  background-color: ${(props) => props.theme.palette.common.white};
  transition: background-image 0.4s ease-in-out;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`

const InfoComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.common.white};
  cursor: default;
  flex: 1 1 100%;
  margin: 0 0 3% 0;
`

type Props = {
  title: string
  text: string
  hasAnimation?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const defaultProps = {
  hasAnimation: false,
  onClick: undefined,
}

export default function InfoComponent(props: Props) {
  const theme = useTheme()
  const { h4, previewTitle } = { ...theme.typography.fontSize }
  return (
    <InfoComponentWrapper onClick={props.onClick}>
      <InfoComponentTitle fontType={previewTitle}>{props.title}</InfoComponentTitle>
      <InfoComponentText fontType={h4} hasAnimation={props.hasAnimation}>
        {props.text}
      </InfoComponentText>
    </InfoComponentWrapper>
  )
}

InfoComponent.defaultProps = defaultProps
