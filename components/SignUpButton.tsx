import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  background-color: #d9d9d9;
  color: black;
  font-weight: 600;
  padding: 10px;
  border-width: 0px;
  margin: 50px 0px 0px auto;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`

function handleSignUp() {
  // TODO: Implement sign up functionality
}

function SignUpButton() {
  return <StyledButton onClick={handleSignUp}>Sign Up Here</StyledButton>
}

export default SignUpButton
