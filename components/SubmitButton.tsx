import { Button as AntdButton } from 'antd'
import { useTheme } from 'styled-components'
import { BaseButton } from './styles/Button.styled'

type Props = {
  text: string
  isActive?: boolean
}

const defaultProps = {
  isActive: false,
}

function SubmitButton(props: Props) {
  const { text, isActive } = props
  const theme = useTheme()
  const { h2 } = { ...theme.typography.fontSize }
  return (
    <BaseButton isActive={isActive} fontType={h2}>
      <AntdButton type="text" htmlType="submit">
        {text}
      </AntdButton>
    </BaseButton>
  )
}

SubmitButton.defaultProps = defaultProps

export default SubmitButton
