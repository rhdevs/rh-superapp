import React from 'react'
import { useTheme } from 'styled-components'
import { PreviewText, PreviewWrapper, PreviewTitle } from './styles/ProjectPreview.styled'

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

export default function ProjectPreview(props: Props) {
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

ProjectPreview.defaultProps = defaultProps
