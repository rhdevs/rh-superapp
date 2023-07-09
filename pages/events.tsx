import PageSectionComponent from '@/components/sample-rhdevs-website/PageSection'
import { InformationMainContainer } from '@/styles/sample-rhdevs-website/GlobalStyledComponents'
import { events } from '@/texts/sample-rhdevs-website/descriptions/events'
import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Start Time
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        End Time
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Type of Event
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        CCA
      </a>
    ),
  },
  {
    key: '69',
    danger: true,
    label: 'a danger item',
    icon: <SmileOutlined />,
  },
]

export default function Events() {
  return (
    <InformationMainContainer>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      {events.map((event, index) => (
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
