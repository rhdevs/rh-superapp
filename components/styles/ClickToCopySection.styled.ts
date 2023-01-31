import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '@/styles/index.styled'

export const ClickToCopyTitle = styled.p<{ fontType: FontType }>`
  margin: 0;
  ${fontTypeCss}
  color: ${(props) => props.color ?? 'white'};
`

export const ClickToCopyLink = styled.a<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.color ?? 'white'};
  cursor: copy;

  &:active {
    color: white !important;
  }
`
