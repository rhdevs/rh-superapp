import { useState } from 'react'
import styled from 'styled-components'
import image from 'next/image'
import SignUpButton from './SignUpButton'
import logo from '@/assets/sample-rhdevs-website/logo.png'

const EventPopupContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  margin: 100px 20% 0px;
`

const CloseButton = styled.button`
  border-radius: 50%;
  display: flex;
  margin-left: auto;
  background-color: #595959;
  color: white;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`

const PopupImage = styled(image)`
  display: block;
  border-radius: 10px;
  height: 70%;
  width: 70%;
  max-height: 70%;
  max-width: 70%;
  margin: 0 auto;
  padding-top: 30px 0 50px;
`

const PopupTitle = styled.h1`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  color: black;
`

const PopupContent = styled.p``

type Props = {
  image: string
  title: string
  content: string
  isActive: boolean
}

/**
 *
 * @returns A popup that displays the event details and sign up button
 *
 */

function EventPopup(props: Props) {
  const [isActive, setIsActive] = useState(true)
  const closePopup = () => {
    setIsActive(false)
  }

  return (
    <div>
      {isActive && (
        <EventPopupContainer>
          <CloseButton onClick={closePopup}>x</CloseButton>
          <PopupImage src={logo} alt="Event Image" />
          <PopupTitle>{props.title}</PopupTitle>
          <PopupContent>{props.content}</PopupContent>
          <SignUpButton />
        </EventPopupContainer>
      )}
    </div>
  )
}

export default EventPopup
