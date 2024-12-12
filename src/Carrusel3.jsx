import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: './calle de las brujas.jpg',
    altText: 'Slide 1',
    caption: 'La Paz-calle de las brujas',
    key: 1,
  },
  {
    src: './cochabamba1.jpg',
    altText: 'Slide 2',
    caption: 'Mercado central-cochabamba',
    key: 2,
  },
  {
    src: './santa cruz1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central abasto-santa cruz',
    key: 3,
  },
  {
    src: './oruro1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central-oruro',
    key: 4,
  },
  {
    src: './potosi1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central-potosi',
    key: 5,
  },
  {
    src: './tarija1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central-tarija',
    key: 6,
  },
  {
    src: './beni1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central-beni',
    key: 7,
  },
  {
    src: './pando1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central-pando',
    key: 8,
  },
  {
    src: './chuquisaca1.jpg',
    altText: 'Slide 3',
    caption: 'Mercado central-chuquisaca',
    key: 9,
  },
];

function Carrusel3(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}
        style={{ width:'100%', height:'500px' }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel3;