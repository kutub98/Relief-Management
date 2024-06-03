import { Carousel, Col, Row } from 'antd';
import Container from './Container';
import PrimaryButton from './PrimaryButton';
import { ReactTyped } from 'react-typed';
import img2 from '../../../assets/image2.jpg';
import {
  BackgroundColor,
  contentStyle,
  textStyle,
} from '../../../Styles/Index';
import React from 'react';

const strings = [
  '  Giving help to those Who need it',
  '  Taking help to those Who need it ',
  '  Sharing help to those Who need it',
];
const HeroSection: React.FC = () => (
  <Container>
    <Carousel autoplay autoplaySpeed={5000} style={contentStyle}>
      <div>
        <Row style={BackgroundColor}>
          <Col style={textStyle}>
            <Col sm={24} lg={12} md={12} xxl={12} className="style">
              <span className="white">
                <h2 style={{ fontSize: '35px' }}>Features</h2>
              </span>
              <div
                style={{
                  background: 'white',
                  padding: '8px',
                  borderRadius: '6px',
                }}
              >
                <ReactTyped
                  strings={strings}
                  className="textStyle"
                  style={{
                    // background: 'white',
                    padding: '8px',
                    borderRadius: '6px',
                  }}
                  typeSpeed={90}
                  backSpeed={10}
                  loop
                />
              </div>

              <p style={{ margin: '10px 0', fontSize: '20px' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita eum nemo ducimus, earum nulla totam dolorum provident
                nihil est quisquam ut qui delectus commodi, quod quam vel,
                laboriosam reprehenderit omnis.
              </p>
              <div>
                <PrimaryButton
                  style={{ margin: '5px', background: 'rgba(0,0,0, 0.5)' }}
                >
                  Donate
                </PrimaryButton>
                <PrimaryButton style={{ margin: '5px', background: 'red' }}>
                  Learn More
                </PrimaryButton>
              </div>
            </Col>
            <Col sm={24} lg={12} md={12} xxl={12} className="styleImg">
              <div
                style={{
                  display: 'flex',
                  padding: '40px',
                  margin: 'auto',
                  justifyContent: 'end',
                  textAlign: 'end',
                }}
              >
                <img
                  style={{
                    height: '400px',
                    width: '400px',
                    borderRadius: '50%',
                    padding: '8px',
                    boxShadow: 'rgb(255,255,255, 0.7) 0px 20px 30px -10px',
                    textAlign: 'end',
                    border: '1px solid white',
                  }}
                  src={img2}
                  alt=""
                />
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Carousel>
  </Container>
);

export default HeroSection;
