import React, { useState, useEffect } from 'react'
import Slider from 'react-styled-carousel'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

const responsive = [
  { breakPoint: 1580, cardsToShow: 5 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 800, cardsToShow: 4 },
  { breakPoint: 640, cardsToShow: 3 },
]

const DotsWrapper = styled.ul`
  display: block;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: fit-content;
`

const ImageContainer = styled.div<{ $height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  height: ${(props) => props.$height?.toString() + 'px' || 'auto'};
  width: 300px;
  position: relative;
`

const Carousel = ({ imgArr }) => {
  const [maxImageWidth, setMaxImageWidth] = useState(0)
  const [imageHeight, setImageHeight] = useState(0)

  const imageStyle = {
    padding: '10px',
    maxWidth: `${maxImageWidth}px`,
  }

  useEffect(() => {
    const updateImageDimensions = () => {
      setMaxImageWidth(window.innerWidth / 4)
      setImageHeight(window.innerWidth / 6)
    }

    updateImageDimensions()

    window.addEventListener('resize', updateImageDimensions)

    return () => {
      window.removeEventListener('resize', updateImageDimensions)
    }
  }, [])

  return (
    <Slider
      responsive={responsive}
      showDots={true}
      autoSlide={3000}
      margin={'0px 15px'}
      DotsWrapper={DotsWrapper}
    >
      {imgArr &&
        imgArr.map((item) => (
          <ImageContainer key={item.id} $height={imageHeight}>
            <Image src={item.src} layout="fill" objectFit="contain" alt="" style={imageStyle} />
          </ImageContainer>
        ))}
    </Slider>
  )
}

Carousel.propTypes = {
  imgArr: PropTypes.array.isRequired,
}

export default Carousel
