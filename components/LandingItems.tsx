import Image from 'next/image'
import { ChangeEvent, createContext, useContext, useState } from 'react'
import styled from 'styled-components'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Event, dummyData } from '@/texts/common/dummy'

const EventsWrapper = styled.div`
  display: flex
  flex-direction: row;
  width: 100%;
  min-height: 80vh;
  padding: 80px 140px;
`

const EventHeader = styled.h1`
  font-size: 38px;
  text-align: center;
`

const SearchBarWrapper = styled.div`
  padding: 30px;
  margin: 0 auto;

  input {
    min-width: 250px;
  }
`

const SearchBar = styled.input`
  width: 100%;
  padding: 8px;
`

const EventContainer = styled.button`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  cursor: pointer;
  background-color: white;
  border: 0;
`

const EventItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px 0;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px 30px;
  line-height: 1.75em;
  align-items: top;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
`

const StyledEventThumbnail = styled(Image)`
  flex-grow: 1;
  max-width: 300px;
`

interface EventContextInterface {
  searchString: string
  setSearchString: (s: string) => void
}

const defaultEventContext: EventContextInterface = {
  searchString: '',
  setSearchString: () => {},
}

const EventContext = createContext<EventContextInterface>(defaultEventContext)

/**
 * Creates the parallax banner through react-scroll-parallax
 * @returns <ParallaxBanner> component
 */
export const ParallaxHero = () => (
  <ParallaxBanner
    layers={[{ image: 'https://picsum.photos/2560/1440', speed: -30 }]}
    style={{ aspectRatio: '2 / 1' }}
  />
)

/**
 * A search bar with context
 * @returns A div with a search bar
 */
const EventSearch = () => {
  const { setSearchString } = useContext(EventContext)

  return (
    <SearchBarWrapper>
      <SearchBar
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchString(e.target.value)
        }}
      />
    </SearchBarWrapper>
  )
}

/**
 * Takes in a url for the image to be the thumbnail for the event listing
 * @param props imageUrl (string)
 * @returns Image for thumbnail
 */
const EventThumbnail = (props: { imageUrl: string }) => (
  <StyledEventThumbnail src={props.imageUrl} width={300} height={300} alt="" />
)

/**
 * Iterates through all the event data to display all the events
 * @returns div with all the event listings
 */
const EventList = () => {
  if (dummyData.length === 0) {
    return <div />
  }

  return (
    <EventContainer>
      {dummyData.map((item: Event) => (
        <EventItem
          id={item.id.toString()}
          onClick={() => {
            alert('put modal here pls')
          }}
        >
          <EventThumbnail imageUrl="https://picsum.photos/300" />
          <EventDetails>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </EventDetails>
        </EventItem>
      ))}
    </EventContainer>
  )
}

/**
 * Wrapper for the event header, search bar and listing
 * @returns div with all event related content with context
 */
export const Events = () => {
  const [search, setSearch] = useState('')

  return (
    <EventContext.Provider
      value={{
        // TODO consider wrapping it in a useMemo hook to prevent unnecessary re-renders
        searchString: search,
        setSearchString: setSearch,
      }}
    >
      <EventsWrapper>
        <EventHeader>Upcoming Events</EventHeader>
        <EventSearch />
        <EventList />
      </EventsWrapper>
    </EventContext.Provider>
  )
}
