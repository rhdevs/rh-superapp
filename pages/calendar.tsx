import styled from 'styled-components'
import { Events } from '@/components/LandingItems'

const PageWrapper = styled.div`
    display: flex
    flex-direction: row
`

const Calendar = () => (
  <PageWrapper>
    <h1>WheeWhoo!</h1>
    <Events />
  </PageWrapper>
)
export default Calendar
