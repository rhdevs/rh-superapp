import React from 'react'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Spinner, StyledLoadingOutline } from './styles/LoadingSpinner.styled'

export default function LoadingSpinner() {
  const antIcon = <LoadingOutlined style={StyledLoadingOutline} spin />
  return (
    <Spinner>
      <Spin indicator={antIcon} />
    </Spinner>
  )
}
