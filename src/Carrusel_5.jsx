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
    src: './buñuelo.jpg',
    altText: 'Slide 1',
    caption: 'buñuelo',
    key: 1,
  },
  {
    src: './humintas.jpg',
    altText: 'Slide 2',
    caption: 'humintas',
    key: 2,
  },
  {
    src: './pastel.jpg',
    altText: 'Slide 3',
    caption: 'Pastel de Choclo',
    key: 3,
  },
  {
    src: './cuñapes.jpg',
    altText: 'Slide 3',
    caption: 'cuñapes',
    key: 4,
  },
  {
    src: './rosquetes.jpg',
    altText: 'Rosquetes',
    caption: 'Rosquetes',
    key: 5,
  },
];

function Carrusel_5(args) {
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
        style={{ width:"90%", height:"500px" }}/>
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

export default Carrusel_5;