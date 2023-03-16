import styled from 'styled-components'

const SocialMediaLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 100px 20px 100px;
`
const Icon = styled.div`
  background-color: ${(props) => props.theme.palette.common.gray};
  border-radius: 50%;
  margin-left: 20px;
  width: 50px;
  height: 50px;
`

const StyledText = styled.text`
  color: ${(props) => props.theme.palette.common.black};
`

const SocialMediaLinks = () => (
  <SocialMediaLinksContainer>
    <StyledText>Follow Us</StyledText>
    <Icon />
    <Icon />
    <Icon />
  </SocialMediaLinksContainer>
)

export default SocialMediaLinks
