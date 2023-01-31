import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { navTitles } from '@/texts/common/navTitles'
import { MainContainer, NavBarSpace, NavItemContainer } from './styles/NavBar.styled'
import NavItem from './NavItem'

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
              href={item === 'Home' ? '/' : `/${item.toLowerCase().match('^[a-zA-Z-]*')}`}
            />
          ))}
        </NavItemContainer>
      </MainContainer>
      <NavBarSpace isVisible={isVisible} />
    </>
  )
}

export default NavBar
