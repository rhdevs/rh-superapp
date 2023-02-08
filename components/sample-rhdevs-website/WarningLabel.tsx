import styled, { FontType, useTheme } from 'styled-components'
import { WarningOutlined } from '@ant-design/icons'

import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'

const Label = styled.span<{ fontType: FontType }>`
  font-size: 20px;
  margin-left: 1rem;
  color: ${(props) => props.theme.palette.primary};

  font-style: normal;
  ${fontTypeCss}
`

type Props = {
  label: string
}

function WarningLabel(props: Props) {
  const theme = useTheme()
  const { h2 } = { ...theme.typography.fontSize }

  return (
    <Label fontType={h2}>
      <WarningOutlined /> {props.label}
    </Label>
  )
}

export default WarningLabel
