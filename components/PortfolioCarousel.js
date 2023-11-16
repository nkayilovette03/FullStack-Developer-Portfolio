import React from 'react'
import { useState } from 'react'
// import "./styles.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const items = [
  {
    src: 'img/portfolio/portfolio-3.jpg',
    altText: 'Portfolio 1',
    caption: 'Portfolio 1',
  },
  {
    src: 'img/portfolio/portfolio-about.png',
    altText: 'Portfolio 2',
    caption: 'Portfolio 2',
  },
  {
    src: 'img/portfolio/portfolio-services.png',
    altText: 'Portfolio 3',
    caption: 'Portfolio 3',
  },
  {
    src: 'img/portfolio/portfolio-resume.png',
    altText: 'Portfolio 3',
    caption: 'Portfolio 3',
  },
  {
    src: 'img/portfolio/portfolio-contact.png',
    altText: 'Portfolio 3',
    caption: 'Portfolio 3',
  },
]

export default function PortfolioCarousel({ image }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const [_activeIndex, _setActiveIndex] = useState(0)
  const [_animating, _setAnimating] = useState(false)

  const _next = () => {
    if (_animating) return
    const nextIndex = _activeIndex === _items.length - 1 ? 0 : _activeIndex + 1
    _setActiveIndex(nextIndex)
  }

  const _previous = () => {
    if (_animating) return
    const nextIndex = _activeIndex === 0 ? _items.length - 1 : _activeIndex - 1
    _setActiveIndex(nextIndex)
  }

  const _goToIndex = (newIndex) => {
    if (_animating) return
    setActiveIndex(newIndex)
  }

  const [__activeIndex, __setActiveIndex] = useState(0)
  const [__animating, __setAnimating] = useState(false)

  const __next = () => {
    if (__animating) return
    const nextIndex =
      __activeIndex === __items.length - 1 ? 0 : __activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const __previous = () => {
    if (__animating) return
    const nextIndex =
      __activeIndex === 0 ? __items.length - 1 : __activeIndex - 1
    __setActiveIndex(nextIndex)
  }

  const __goToIndex = (newIndex) => {
    if (__animating) return
    __setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='portfolio-images' />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <div className='App'>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}
