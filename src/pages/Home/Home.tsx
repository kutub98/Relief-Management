import React from 'react';
import HeroSection from '../../Components/UI/UX/HeroSection';
import AllReleifGoods from '../AllReleifGoods/AllReleifGoods';
import About from '../About/About';
import Testimonials from '../../Components/UI/UX/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AllReleifGoods />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
