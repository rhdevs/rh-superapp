import styled, { FontType } from 'styled-components'
import { fontTypeCss } from '@/styles/index.styled'

export const InputFieldContainer = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`

export const InputFieldHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0;
`

export const InputFieldTitle = styled.div<{ fontType: FontType }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0;

  font-style: normal;
  ${fontTypeCss}

  color: ${(props) => props.theme.palette.common.white};
`

export const TextInput = styled.input<{ fontType: FontType }>`
  width: 100%;
  height: 45px;
  margin: 0;

  outline: 0;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.gray};

  font-style: normal;
  ${fontTypeCss}

  color: white;
  background: transparent;

  transition: border-color 0.2s;

  :focus {
    border-bottom-color: ${(props) => props.theme.palette.common.white};
  }
  :invalid {
    border-bottom-color: ${(props) => props.theme.palette.primary};
  }
`
