import styled from 'styled-components'

export const NAV_BAR_HEIGHT = '4rem'

export const MainContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: ${NAV_BAR_HEIGHT};
  margin: 0;
  ${(props) => props.isVisible && 'position: fixed;'}
  top: ${(props) => (props.isVisible ? 0 : `-${NAV_BAR_HEIGHT}`)};
  transition: top 0.3s;
  background-color: ${(props) => `${props.theme.palette.common.black}`};
`

export const NavItemContainer = styled.div`
  height: ${NAV_BAR_HEIGHT};
  display: flex;
  margin-left: 3rem;

  div + div {
    margin-left: 2rem;
  }
`

export const NavBarSpace = styled.div<{ isVisible: boolean }>`
  height: ${(props) => (props.isVisible ? NAV_BAR_HEIGHT : '0')};
`
