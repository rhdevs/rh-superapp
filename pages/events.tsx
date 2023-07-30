/* eslint-disable */
import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import { events } from '@/texts/sample-rhdevs-website/descriptions/events'
import React, { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

const items: MenuProps['items'] = [
  {
    label: 'Title',
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
  '0': 'title',
  '1': 'startTime',
  '2': 'endTime',
  '3': 'type',
  '4': 'cca',
  '5': 'tags',
}

export default function Events() {
  const [eventsArr, setEventsArr] = useState(events)
  const [sortType, setSortType] = useState('0')

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setSortType(key)
  }

  const sortEvents = (key) => {
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

  return (
    <InformationMainContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Dropdown menu={{ selectable: true, defaultSelectedKeys: ['0'], items, onClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Sort by
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {eventsArr.map((event, index) => (
        <PageSectionComponent
          key={index}
          title={event.title}
          description={event.description}
          imgPosition={index % 2 === 0 ? 'left' : 'right'}
          imageSrc={event.image}
          events
        />
      ))}
    </InformationMainContainer>
  )
}
