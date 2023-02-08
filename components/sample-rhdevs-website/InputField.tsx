import styled, { FontType, useTheme } from 'styled-components'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import WarningLabel from './WarningLabel'
import { defaultRegex, invalidEmail, invalidName, missingField } from '@/texts/errors/formErrors'

import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'

const InputFieldContainer = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`

const InputFieldHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0;
`

const InputFieldTitle = styled.div<{ fontType: FontType }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0;

  font-style: normal;
  ${fontTypeCss}

  color: ${(props) => props.theme.palette.common.white};
`

const TextInput = styled.input<{ fontType: FontType }>`
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

type Types = 'text' | 'name' | 'email'

type Props = {
  type?: Types
  title: string
  error: any
  register: UseFormRegister<FieldValues>
  pattern?: RegExp
  required?: boolean
}

const defaultProps = {
  type: 'text',
  pattern: defaultRegex,
  required: false,
}

const warningLabelTexts: Record<Types, string> = {
  text: missingField,
  name: invalidName,
  email: invalidEmail,
}
function InputField(props: Props) {
  const theme = useTheme()

  const { title, error, register, required } = props
  const type = props.type ?? 'text'
  const pattern = props.pattern ?? defaultRegex

  const {
    common: { white },
    primary,
  } = { ...theme.palette }
  const { input, h2 } = { ...theme.typography.fontSize }

  const warningLabelText = warningLabelTexts[`${type}`]

  /* eslint-disable react/jsx-props-no-spreading */
  /* eslint-disable object-shorthand */
  return (
    <InputFieldContainer>
      <InputFieldHeader>
        <InputFieldTitle fontType={h2} style={{ color: error ? primary : white }}>
          {title}
          <span style={{ paddingLeft: '0.1rem' }}>:</span>{' '}
          {/* fine space between title and colon */}
        </InputFieldTitle>
        {error && <WarningLabel label={warningLabelText} />}
      </InputFieldHeader>
      <TextInput
        pattern={pattern.source} // for css side rendering
        fontType={input}
        {...register(title, { required: required, pattern: pattern })}
      />
    </InputFieldContainer>
  )
}

InputField.defaultProps = defaultProps

export default InputField
