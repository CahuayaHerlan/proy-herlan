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
    src: './la paz.jpg',
    altText: 'Masako',
    caption: 'Plato Paceño - La Paz ',
    key: 1,
  },
  {
    src: './charquekan-oruro.jpg',
    altText: 'Slide 2',
    caption: 'Charquekan - Oruro',
    key: 2,
  },
  {
    src: './potosi.jpg',
    altText: 'Slide 3',
    caption: 'Kalapurca - Potosi',
    key: 3,
  },
  {
    src: './cochabamba.jpg',
    altText: 'Slide 3',
    caption: 'Silpancho - Cochabamba',
    key: 4,
  },
  {
    src: './tarija.jpg',
    altText: 'Slide 3',
    caption: 'Saice - Tarija',
    key: 5,
  },
  {
    src: './chuquisaca.jpg',
    altText: 'Slide 3',
    caption: 'Chorizo Chuquisaqueño - Chuquisaca',
    key: 6,
  },
  {
    src: './santa cruz.jpg',
    altText: 'Slide 3',
    caption: 'Majadito - Santa Cruz',
    key: 7,
  },
  {
    src: './pando.jpg',
    altText: 'Slide 3',
    caption: 'Farofa - Pando',
    key: 8,
  },
  {
    src: './beni.jpg',
    altText: 'Slide 3',
    caption: 'Masako - Beni',
    key: 9,
  },
];

function Carrusel(args) {
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
            style={{ width: '65%', height: '500px' }} />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
          style={{ color: 'black', }}
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

export default Carrusel;