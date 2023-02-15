import React from 'react'
import MonthCard from '../components/archive/MonthCard'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const SAMPLE_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Block_3_of_Raffles_Hall%2C_National_University_of_Singapore%2C_at_night_-_20070116.jpg/1600px-Block_3_of_Raffles_Hall%2C_National_University_of_Singapore%2C_at_night_-_20070116.jpg?20131122164551'

const Archive = (): React.ReactElement => {
  // Sample calendar archive events, no sort guarantee.
  // year at top selection, months
  return (
    <>
      {MONTHS.map((monthStr: string) => (
        <MonthCard monthDisplayAbbreviation={monthStr} imageUrl={SAMPLE_IMAGE} />
      ))}
    </>
  )
}

export default Archive
