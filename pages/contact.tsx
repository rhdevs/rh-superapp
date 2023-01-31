import Image from 'next/image'
import styled, { FontType, useTheme } from 'styled-components'

import { contactHeaders, contactMethods, socialMedia } from '@/texts/common/rhdevsInfo'
import ContactForm from '@/components/ContactForm'
import ClickToCopySection from '@/components/ClickToCopySection'

import { InformationMainContainer } from '@/styles/GlobalStyledComponents'
import { fontTypeCss } from '@/styles/index.styled'

import logo from '@/assets/logo.png'

const MainContainer = styled(InformationMainContainer)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.white};
  gap: 50px;
`

const StaticSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`

const InformationSection = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Logo = styled(Image)`
  width: 30%;
  height: 100%;
  object-fit: contain;
`

const ContactTitle = styled.label<{ fontType: FontType }>`
  ${fontTypeCss}
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SectionTitle = styled.p<{ fontType: FontType }>`
  margin: 0;
  ${fontTypeCss}
`

const SectionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a + a {
    padding: 0 50px;
  }
`

const ContactLink = styled.a<{ fontType: FontType }>`
  ${fontTypeCss}
  color: ${(props) => props.theme.palette.common.gray};
  text-decoration: none;
`

export default function Contact() {
  const theme = useTheme()
  const { body, h1, h2 } = { ...theme.typography.fontSize }
  return (
    <MainContainer>
      <ContactTitle fontType={h1}>Contact Us</ContactTitle>
      <StaticSection>
        <InformationSection>
          {contactHeaders.map((header, index) => (
            <SectionContainer key={index}>
              <ClickToCopySection text={contactMethods[header]} title={header} />
            </SectionContainer>
          ))}
          <SectionContainer>
            <SectionTitle fontType={h2}>{socialMedia.title}</SectionTitle>
            <SectionContent>
              {socialMedia.items.map((item, index) => (
                <ContactLink
                  key={index}
                  fontType={body}
                  href={socialMedia.links[item]}
                  target="_blank">
                  {item}
                </ContactLink>
              ))}
            </SectionContent>
          </SectionContainer>
        </InformationSection>
        <Logo src={logo} alt="logo" />
      </StaticSection>
      <ContactForm />
    </MainContainer>
  )
}
