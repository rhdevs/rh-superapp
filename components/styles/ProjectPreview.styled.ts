import styled, { keyframes, FontType, css } from 'styled-components'
import { fontTypeCss } from '@/styles/index.styled'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const PreviewText = styled.div<{ hasAnimation?: boolean; fontType: FontType }>`
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

export const PreviewTitle = styled.label<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.white};
  background-color: ${(props) => props.theme.palette.common.black};
  transition: background-image 0.4s ease-in-out;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.common.black};
  cursor: default;
  flex: 1 1 100%;
  margin: 0 0 3% 0;
`
