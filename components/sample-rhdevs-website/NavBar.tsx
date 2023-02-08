import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { navTitles } from '@/texts/sample-rhdevs-website/common/navTitles'
import NavItem from './NavItem'

export const NAV_BAR_HEIGHT = '4rem'

const MainContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: ${NAV_BAR_HEIGHT};
  margin: 0;
  ${(props) => props.isVisible && 'position: fixed;'}
  top: ${(props) => (props.isVisible ? 0 : `-${NAV_BAR_HEIGHT}`)};
  transition: top 0.3s;
  background-color: ${(props) => `${props.theme.palette.common.black}`};
`

const NavItemContainer = styled.div`
  height: ${NAV_BAR_HEIGHT};
  display: flex;
  margin-left: 3rem;

  div + div {
    margin-left: 2rem;
  }
`

const NavBarSpace = styled.div<{ isVisible: boolean }>`
  height: ${(props) => (props.isVisible ? NAV_BAR_HEIGHT : '0')};
`

function NavBar() {
  const router = useRouter()
  const pageFilePath = router.pathname
  const pageName = pageFilePath.slice(1)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isVisible])

  return (
    <>
      <MainContainer isVisible={isVisible}>
        <NavItemContainer>
          {navTitles.map((item, index) => (
            <NavItem
              key={index}
              text={item}
              isActive={
                item.toLowerCase() === pageName ||
                (item === 'Home' && pageName === '') ||
                (item === 'About Us' && pageName === 'about') ||
                (item === 'Contact Us' && pageName === 'contact')
              }
              href={
                item === 'Home'
                  ? '/sample-rhdevs-website'
                  : `/sample-rhdevs-website/${item.toLowerCase().match('^[a-zA-Z-]*')}`
              }
            />
          ))}
        </NavItemContainer>
      </MainContainer>
      <NavBarSpace isVisible={isVisible} />
    </>
  )
}

export default NavBar
