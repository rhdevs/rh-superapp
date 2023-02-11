import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import SignUpButton from './SignUpButton'

const EventPopupContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  margin-top: 100px;
  margin-left: 20%;
  margin-right: 20%;
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

const PopupImage = styled.img`
  display: block;
  border-radius: 10px;
  max-height: 70%;
  max-width: 70%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 50px;
`

const PopupTitle = styled.h1`
  display: flex;
  font-size: 24px;
  font-weight: 600;
  color: black;
`
const PopupContent = styled.p`
  white-space: pre-line;
`

type Props = {
  image: any
  title: string
  content: string
  isActive: boolean
}

const defaultProps = {
  image:
    'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  title: 'Valentines Day Event',
  content:
    "Still thinking of what to get your  friends  or that special someone for VALENTINES DAY? RVC SP got you!!! With a wide assortment of gifts from fresh flowers and preserved flowers , there's bound to be something for everyone! As all stocks are limited, fill up the pre order form HERE to get FIRST DIBS on your items! P.S. Due to unforeseen circumstances, our crochet flowers will not be sold anymore but fret not! The other options are still available so faster PREORDER NOWWWWAll profits will be channelled to support the welfare of our beneficiaries so DONT WAIT ANYMORE!!! Show your love to your friends/ boo and do a good deed today!",
  isActive: true,
}

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
          <PopupImage src={defaultProps.image} alt="Event Image" />
          <PopupTitle>{defaultProps.title}</PopupTitle>
          <PopupContent>{defaultProps.content}</PopupContent>
          <SignUpButton />
        </EventPopupContainer>
      )}
    </div>
  )
}

export default EventPopup
