import React from 'react'
import styled from 'styled-components'

const SignUpButtonContainer = styled.button`
  display: flex;
  background-color: #d9d9d9;
  color: black;
  font-weight: 600;
  padding: 10px;
  border-width: 0px;
  margin-top: 50px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
  }
`

function SignUpButton() {
  return <SignUpButtonContainer>Sign Up Here!</SignUpButtonContainer>
}

export default SignUpButton
