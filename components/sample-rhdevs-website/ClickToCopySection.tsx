import styled, { FontType, useTheme } from 'styled-components'
import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'

const ClickToCopyTitle = styled.p<{ fontType: FontType }>`
  margin: 0;
  ${fontTypeCss}
  color: ${(props) => props.color ?? 'white'};
`

const ClickToCopyLink = styled.a<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.color ?? 'white'};
  cursor: copy;

  &:active {
    color: white !important;
  }
`
function ClickToCopySection({
  text,
  value,
  title,
}: {
  text: string
  value?: string
  title?: string
}) {
  const theme = useTheme()
  const { body, h2 } = { ...theme.typography.fontSize }

  return (
    <>
      <ClickToCopyTitle color={theme.palette.common.white} fontType={h2}>
        {title}
      </ClickToCopyTitle>
      <ClickToCopyLink
        onClick={
          () =>
            navigator.clipboard.writeText(
              value ?? text,
            ) /* set text as value if not explicitly specified */
        }
        color={theme.palette.primary}
        fontType={body}
      >
        {text}
      </ClickToCopyLink>
    </>
  )
}

ClickToCopySection.defaultProps = {
  value: undefined,
  title: undefined,
}

export default ClickToCopySection
