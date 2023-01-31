import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTheme } from 'styled-components'
import WarningLabel from './WarningLabel'
import { defaultRegex, invalidEmail, invalidName, missingField } from '@/texts/errors/formErrors'

import {
  InputFieldContainer,
  InputFieldHeader,
  InputFieldTitle,
  TextInput,
} from './styles/InputField.styled'

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
