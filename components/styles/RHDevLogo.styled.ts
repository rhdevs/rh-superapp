import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black;
  height: 100%;
  width: 100vw;
`

export const LogoContainer = styled.div`
  margin-top: 2rem;
  width: 400px;
  height: 400px;
  position: relative;
`

export const LeftArrow = styled.div`
  width: 50px;
  height: 180px;
  top: 0;
  left: 10%;
  background: white;
  position: absolute;
  transform: rotate(45deg);
  animation-name: leftIn;
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-fill-mode: both;

  ::after {
    content: '';
    width: 50px;
    height: 180px;
    transform: rotate(90deg);
    background: white;
    position: absolute;
    top: 65px;
    left: 65px;
  }

  @keyframes leftIn {
    from {
      left: -50vw;
    }
    to {
      left: 28%;
    }
  }
`

export const RightArrow = styled.div`
  width: 50px;
  height: 180px;
  top: 20%;
  background: white;
  position: absolute;
  transform: rotate(-45deg);
  animation-name: rightIn;
  animation-delay: 1.75s;
  animation-duration: 1s;
  animation-fill-mode: both;

  ::after {
    content: '';
    width: 50px;
    height: 180px;
    transform: rotate(-90deg);
    background: white;
    position: absolute;
    top: 65px;
    right: 65px;
  }

  @keyframes rightIn {
    from {
      right: -50vw;
    }
    to {
      right: 28%;
    }
  }
`

export const Line = styled.div`
  width: 50px;
  height: 360px;
  bottom: 8%;
  left: 44%;
  background: rgb(196, 196, 196, 0.5);
  transform: rotate(47deg);
  position: absolute;
  animation-fill-mode: both;
  animation-delay: 3s;
  animation-name: secondFadeIn;
  animation-duration: 1s;

  @keyframes secondFadeIn {
    from {
      opacity: 0;
      height: 30px;
      bottom: 80%;
      left: 74%;
    }
    to {
      opacity: 1;
      height: 360px;
      bottom: 11%;
    }
  }
`
