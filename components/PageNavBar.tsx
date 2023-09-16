import { Button } from 'antd'
import styled from 'styled-components'

export const NAV_BAR_HEIGHT = '4rem'

const MainContainer = styled.div`
  width: 100vw;
  height: ${NAV_BAR_HEIGHT};
  margin: 10px;
  display: flex;
  flex-direction: row;
  bottom: 10;
  justify-content: center;
`

type Props = {
  navigateToNext: () => void
  navigateToPrev: () => void
  isPrevVisible: boolean
  isNextVisible: boolean
}

const PageNavBar = (props: Props) => (
  <MainContainer>
    {
      <Button
        type="primary"
        title="Previous"
        onClick={() => {
          props.navigateToPrev()
        }}
        disabled={!props.isPrevVisible}
      >
        Previous
      </Button>
    }
    {
      <Button
        type="primary"
        title="Next"
        onClick={() => {
          props.navigateToNext()
        }}
        disabled={!props.isNextVisible}
      >
        Next
      </Button>
    }
  </MainContainer>
)

export default PageNavBar
