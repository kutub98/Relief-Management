import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Container from './Container';
import TestimonialCard from './TestimonialCard';
import { PrimaryBg } from '../../../Styles/Index';
const contentStyle: React.CSSProperties = {
  height: 'auto',
  color: '#fff',
  textAlign: 'center',
};

const items = [
  { content: <TestimonialCard /> },
  { content: <TestimonialCard /> },
  { content: <TestimonialCard /> },
  { content: <TestimonialCard /> },
  { content: <TestimonialCard /> },
  { content: <TestimonialCard /> },
];

const Testimonials: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setSlidesToShow(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const extendedItems = [...items, ...items.slice(0, slidesToShow - 1)];

  return (
    <Container>
      <Carousel
        className=""
        dots={true}
        infinite
        autoplay
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        style={{ ...PrimaryBg, padding: '20px', borderRadius: '6px' }}
      >
        {extendedItems.map((item, index) => (
          <div key={index}>
            <div style={contentStyle}>{item.content}</div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
