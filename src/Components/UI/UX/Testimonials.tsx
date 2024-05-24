import { Carousel, Col, Row } from 'antd';
import Container from './Container';
import bg from '../../../assets/bg.avif';
import { PrimaryBg } from '../../../Styles/Index';
export const Background: React.CSSProperties = {
  color: '#fff',
  backgroundImage: `url(${bg})`,
  backgroundPosition: 'center', // Corrected spelling of 'center'
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',

  margin: 'auto',
  justifyContent: 'center',
};
const Testimonials = () => (
  <Container style={PrimaryBg}>
    <Carousel
      autoplay
      autoplaySpeed={2000}
      style={{
        width: '600px',
        margin: 'auto auto',
        background: 'white',
      }}
    >
      <div>
        <Row gutter={8}>
          <Col>Hello1</Col>
        </Row>
      </div>
      <div>
        <Row gutter={8}>
          <Col>Hello1</Col>
        </Row>
      </div>
      <div>
        <Row gutter={8}>
          <Col>
            <div>
              <img
                src="https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
  </Container>
);

export default Testimonials;
