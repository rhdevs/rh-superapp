import Link from 'next/link'
import { MouseEventHandler } from 'react'
import styled, { css, FontType, useTheme } from 'styled-components'
import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'

const activeCss = css`
  color: ${(props) => props.theme.palette.primary};
  //css solution for styled underline
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.palette.primary},
    ${(props) => props.theme.palette.primary}
  );
  background-repeat: no-repeat;
  background-position: 50% calc(50% + 12px);
  // change this to adjust width and thickness out underline
  background-size: calc(100% - 8px) 2px;
`

const inactiveCss = css`
  color: ${(props) => props.theme.palette.common.white};
  &:hover {
    font-size: 130%;
  }
`

const StyledNavItem = styled(Link)<{ isActive?: boolean; fontType: FontType }>`
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // overwrite default link styles
  color: inherit;
  text-decoration: inherit;

  ${fontTypeCss}
  transition: font-size 0.3s;
  text-transform: capitalize;
  line-height: 1;

  ${(props) => (props.isActive ? activeCss : inactiveCss)}

  @media (max-width: 650px) {
    font-size: 12px;
  }
`

type NavItemProps = {
  text: string
  href?: string
  isActive?: boolean
}

const defaultProps = {
  isActive: false,
}

export default function NavItem({ text, href, isActive }: NavItemProps) {
  const theme = useTheme()
  const { h3 } = { ...theme.typography.fontSize }
  return (
    <StyledNavItem href={href ?? ''} isActive={isActive} fontType={h3}>
      {text}
    </StyledNavItem>
  )
}

NavItem.defaultProps = defaultProps
