import React from 'react'
import Slider from 'react-styled-carousel'
import PropTypes from 'prop-types'
import Image from 'next/image'

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 840, cardsToShow: 2 },
]

const Carousel = ({ imgArr }) => {
  return (
    <Slider reponsive={responsive} showDots={true}>
      {imgArr &&
        imgArr.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            width={window.innerWidth / 4}
            height={window.innerWidth / 6}
            alt=""
          />
        ))}
    </Slider>
  )
}
Carousel.propTypes = {
  imgArr: PropTypes.array.isRequired,
}

export default Carousel
