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

const PreviewText = styled.div<{ hasAnimation?: boolean; fontType: FontType }>`
  ${fontTypeCss}
  margin-top: 20px;
  color: ${(props) => props.theme.palette.common.gray};
  ${(props) =>
    props.hasAnimation &&
    css`
      animation-name: ${fadeIn};
      animation-delay: 1s;
      animation-duration: 1.5s;
      animation-fill-mode: both;
    `}
`

const PreviewTitle = styled.label<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.black};
  background-color: ${(props) => props.theme.palette.common.white};
  transition: background-image 0.4s ease-in-out;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`

const PreviewWrapper = styled.div`
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

export default function Preview(props: Props) {
  const theme = useTheme()
  const { h4, previewTitle } = { ...theme.typography.fontSize }
  return (
    <PreviewWrapper onClick={props.onClick}>
      <PreviewTitle fontType={previewTitle}>{props.title}</PreviewTitle>
      <PreviewText fontType={h4} hasAnimation={props.hasAnimation}>
        {props.text}
      </PreviewText>
    </PreviewWrapper>
  )
}

Preview.defaultProps = defaultProps
