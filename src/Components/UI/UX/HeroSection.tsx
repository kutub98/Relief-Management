import React from 'react';
import { Carousel, Col, Row } from 'antd';
import Container from './Container';

import frontImg from '../../../assets/1.png';
import frontImg2 from '../../../assets/2.png';
import frontImg3 from '../../../assets/3.png';
import PrimaryButton from './PrimaryButton';
import {
  BackgroundColor,
  contentStyle,
  imageStyle,
  textStyle,
} from '../../../Styles/Index';

const HeroSection: React.FC = () => (
  <Container>
    <Carousel autoplay autoplaySpeed={1000} style={contentStyle}>
      <div>
        <Row style={BackgroundColor}>
          <Col style={textStyle}>
            <Col sm={12} lg={12} md={12} xxl={12}>
              <h1>Disaster</h1>
              <h1 style={{ fontSize: '50px' }}>Crisis Reliefs</h1>
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
            <Col xs={0} sm={12} lg={12} md={12} xxl={12}>
              <img src={frontImg3} alt="" style={imageStyle} />
            </Col>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={BackgroundColor}>
          <Col style={textStyle}>
            <Col sm={12} lg={12} md={12} xxl={12}>
              <h1>Disaster</h1>
              <h1 style={{ fontSize: '50px' }}>Crisis Reliefs</h1>
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
            <Col xs={0} sm={12} lg={12} md={12} xxl={12}>
              <img src={frontImg2} alt="" style={imageStyle} />
            </Col>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={BackgroundColor}>
          <Col style={textStyle}>
            <Col sm={12} lg={12} md={12} xxl={12}>
              <h1>Disaster</h1>
              <h1 style={{ fontSize: '50px' }}>Crisis Reliefs</h1>
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
            <Col xs={0} sm={12} lg={12} md={12} xxl={12}>
              <img src={frontImg} alt="" style={imageStyle} />
            </Col>
          </Col>
        </Row>
      </div>
    </Carousel>
  </Container>
);

export default HeroSection;
