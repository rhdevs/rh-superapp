import Link from 'next/link'
import { useState } from 'react'
import styled, { css, FontType, useTheme } from 'styled-components'
import { fontTypeCss } from '@/styles/sample-rhdevs-website/index.styled'

import { dropdownTitles } from '@/texts/common/dropdownTitles'

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
const DropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 90px;
  background-position: 50% calc(50% + 12px);
  background-color: black;
  justify-content: center;
  align-items: center;
`

const StyledNavItem = styled(Link)<{
  isActive?: boolean
  fontType: FontType
}>`
  height: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;

  // overwrite default link styles
  color: inherit;
  text-decoration: inherit;

  ${fontTypeCss}
  transition: font-size 0.3s;
  text-transform: capitalize;
  //line-height: 1;

  ${(props) => (props.isActive ? activeCss : inactiveCss)}

  @media (max-width: 650px) {
    font-size: 12px;
  }
`
const ColumnNavItemContainer = styled(StyledNavItem)`
  margin-left: 0;

  a + a {
    margin-top: 1rem;
    margin-left: 0;
  }
`

type NavItemProps = {
  text: string
  href?: string
  isActive?: boolean
  isDropdown?: boolean
  isInColumn?: boolean
}

const defaultProps = {
  href: '',
  isActive: false,
  isDropdown: false,
  isInColumn: false,
}

export default function NavItem({ text, href, isActive, isDropdown, isInColumn }: NavItemProps) {
  const theme = useTheme()
  const [dropdown, setDropdown] = useState(false)
  const { h3 } = { ...theme.typography.fontSize }
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return isDropdown ? (
    <StyledNavItem
      href={href ?? ''}
      isActive={isActive}
      fontType={h3}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{text}</div>

      {dropdown && (
        <DropdownDiv>
          {dropdownTitles.map((item, index) => (
            <NavItem
              key={index}
              text={item}
              isDropdown={item.toLowerCase() === 'about us'}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              isInColumn={isInColumn}
            />
          ))}
        </DropdownDiv>
      )}
    </StyledNavItem>
  ) : isInColumn ? (
    <ColumnNavItemContainer href={href ?? ''} isActive={isActive} fontType={h3}>
      {text}
    </ColumnNavItemContainer>
  ) : (
    <StyledNavItem href={href ?? ''} isActive={isActive} fontType={h3}>
      {text}
    </StyledNavItem>
  )
}

NavItem.defaultProps = defaultProps
