/* eslint-disable */
import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import React, { useEffect, ChangeEvent, createContext, useContext, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Space } from 'antd'
import styled from 'styled-components'
import { Event, dummyData } from '@/texts/common/dummy'

const items: MenuProps['items'] = [
  {
    label: 'Name',
    key: '0',
  },
  {
    label: 'Start Time',
    key: '1',
  },
  {
    label: 'End Time',
    key: '2',
  },
  {
    label: 'Type of Event',
    key: '3',
  },
  {
    label: 'CCA',
    key: '4',
  },
  {
    label: 'Tags',
    key: '5',
  },
]

const types = {
  '0': 'name',
  '1': 'startTime',
  '2': 'endTime',
  '3': 'type',
  '4': 'cca',
  '5': 'tags',
}

const searchedCategories = ['name', 'type', 'description', 'cca', 'tags']

const HeaderWrapper = styled.div`
  display: flex
  flex-direction: row;
  width: 100%;
`

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
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  input {
    min-width: 250px;
  }
`

const SearchBar = styled.input`
  width: 100%;
  padding: 1px;
  type: text;
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
interface EventContextInterface {
  searchString: string
  setSearchString: (s: string) => void
  sortType: string
  sortEvents: (s: string) => void
  filterEvents: (s: string) => void
}

const defaultEventContext: EventContextInterface = {
  searchString: '',
  setSearchString: () => {},
  sortType: '',
  sortEvents: () => {},
  filterEvents: () => {},
}

const EventContext = createContext<EventContextInterface>(defaultEventContext)


const EventSearch = () => {
  const { searchString, setSearchString, sortType, sortEvents, filterEvents } = useContext(EventContext)
  return (
    <SearchBarWrapper>
      <SearchBar
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchString(e.target.value)
        }}
      />
      <Button type="primary" title="Search" onClick={() => {
        console.log("Search:" + searchString)
          filterEvents(searchString)
        }} >
          Search
        </Button>
    </SearchBarWrapper>
  )
}

export default function Events() {
  const defaultList = dummyData
  const [eventsArr, setEventsArr] = useState(defaultList)
  const [sortType, setSortType] = useState('0')
  const [search, setSearch] = useState('')

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setSortType(key)
  }

  const sortEvents = (key) => {
    console.log("sorting")
    const sortProperty = types[key]
    const sorted = [...eventsArr].sort((a, b) => {
      if (typeof a[sortProperty] === 'string') {
        const x = a[sortProperty].toLowerCase()
        const y = b[sortProperty].toLowerCase()
        if (x < y) {
          return -1
        }
        if (x > y) {
          return 1
        }
        return 0
      } else if (a[sortProperty] instanceof Date) {
        const x = a[sortProperty]
        const y = b[sortProperty]
        if (x < y) {
          return -1
        }
        if (x > y) {
          return 1
        }
        return 0
      } else {
        return a[sortProperty] - b[sortProperty]
      }
    })
    setEventsArr(sorted)
  }

  useEffect(() => {
    sortEvents(sortType)
  }, [sortType])

  const filterEvents = (query) => {
    if (query == '') {
      setEventsArr(defaultList);
      sortEvents(sortType);
    } else {
      const realQuery = query.toLowerCase();
      const filtered = defaultList.filter((event) => {
        return searchedCategories.some((type) => {
          return event[type].toLowerCase().includes(realQuery);
        });
      });
      setEventsArr(filtered);
    }
  };
  

  return (
    <EventContext.Provider
      value={{
        // TODO consider wrapping it in a useMemo hook to prevent unnecessary re-renders
        searchString: search,
        sortType: sortType,
        setSearchString: setSearch,
        sortEvents: sortEvents,
        filterEvents: filterEvents
      }}
    >
    <InformationMainContainer>
      <HeaderWrapper>
        <EventSearch />
        <Dropdown menu={{ selectable: true, defaultSelectedKeys: ['0'], items, onClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Sort by
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </HeaderWrapper>
      {eventsArr.map((event, index) => (
        <PageSectionComponent
          key={index}
          title={event.name}
          description={event.description}
          imgPosition={index % 2 === 0 ? 'left' : 'right'}
          imageSrc={event.image}
          events
        />
      ))}
    </InformationMainContainer>
    </EventContext.Provider>
  )
}
