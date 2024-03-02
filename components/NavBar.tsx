import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { navTitles } from '@/texts/common/navTitles'
import NavItem from './NavItem'

export const NAV_BAR_HEIGHT = '4rem'

const MainContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: ${NAV_BAR_HEIGHT};
  margin: 0;
  ${(props) => props.isVisible && 'position: fixed;'}
  top: ${(props) => (props.isVisible ? 0 : `-${NAV_BAR_HEIGHT}`)};
  transition: top 0.3s;
`

const NavItemContainer = styled.div`
  height: ${NAV_BAR_HEIGHT};
  display: flex;

  a + a {
    margin-left: 2rem;
  }
`

const NavBarSpace = styled.div<{ isVisible: boolean }>`
  height: ${(props) => (props.isVisible ? NAV_BAR_HEIGHT : '0')};
`

const ImageContainer = styled.div`
  height: ${NAV_BAR_HEIGHT};
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;

  a + a {
    margin-left: 2rem;
  }
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
          <ImageContainer>
            <Image src="/assets/rh-logo.png" width={50} height={50} alt="RH logo" />
          </ImageContainer>
          {navTitles.map((item, index) => (
            <NavItem
              key={index}
              text={item}
              isActive={item.toLowerCase() === pageName || (item === 'Home' && pageName === '')}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            />
          ))}
        </NavItemContainer>
      </MainContainer>
      <NavBarSpace isVisible={isVisible} />
    </>
  )
}

export default NavBar
