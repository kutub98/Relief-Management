import HeroSection from '../../Components/UI/UX/HeroSection';
import AllReleifGoods from '../AllReleifGoods/AllReleifGoods';
import About from '../About/About';
import Testimonials from '../../Components/UI/UX/Testimonials';
import Fundamental from '../../Components/UI/UX/Fundamental';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Fundamental />
      <AllReleifGoods />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
