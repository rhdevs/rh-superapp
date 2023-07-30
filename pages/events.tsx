/* eslint-disable */
import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import { events } from '@/texts/sample-rhdevs-website/descriptions/events'
import React, { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message, Space } from 'antd'

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
]

const types = {
  '0': 'title',
  '1': 'startTime',
  '2': 'endTime',
  '3': 'type',
  '4': 'cca',
}

export default function Events() {
  const [eventsArr, setEventsArr] = useState(events)
  const [sortType, setSortType] = useState('0')

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setSortType(key)
    //message.info(`Sorted by ${items?[parseInt(key) - 1].label}`)
  }

  const sortEvents = (key) => {
    const sortProperty = types[key]
    const sorted = [...eventsArr].sort((a, b) => {
      if (typeof a[sortProperty] === 'string') {
        let x = a[sortProperty].toLowerCase()
        let y = b[sortProperty].toLowerCase()
        if (x < y) {
          return -1
        }
        if (x > y) {
          return 1
        }
        return 0
      } else if (a[sortProperty] instanceof Date) {
        let x = a[sortProperty]
        let y = b[sortProperty]
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
    console.log(sorted)
    setEventsArr(sorted)
  }

  useEffect(() => {
    sortEvents(sortType)
    //console.log(eventsArr)
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
