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
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const strings = [
  '  Giving help to those Who need it',
  '  Taking help to those Who need it ',
  '  Sharing help to those Who need it',
];
const HeroSection: React.FC = () => (
  <Container>
    <div style={contentStyle}>
      <Row style={BackgroundColor}>
        <Col style={textStyle}>
          <Col sm={24} lg={12} md={24} xxl={12} className="style">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: 'spring',
                stiffness: 120,
              }}
            >
              <span className="white">
                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.9,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  style={{ fontSize: '35px' }}
                >
                  Features
                </motion.h2>
              </span>
              <div
                style={{
                  background: 'white',
                  width: '98%',
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
              <div
                className="buttonGroup"
                style={{
                  display: 'flex',
                }}
              >
                <PrimaryButton
                  style={{ margin: '5px', background: 'rgba(0,0,0, 0.5)' }}
                >
                  Donate
                </PrimaryButton>
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileHover={{
                    scale: 1,
                    boxShadow: '0px 0px 8px rgba(255, 255, 255)',
                    textShadow: '0px 0px 8px rgba(255, 255, 255)',
                  }}
                >
                  <Link to={'about'}>
                    <PrimaryButton style={{ margin: '5px', background: 'red' }}>
                      Learn More
                    </PrimaryButton>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          <Col sm={24} lg={12} md={12} xxl={12} className="styleImg">
            <Carousel
              autoplay
              autoplaySpeed={5000}
              className="carousel"
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginLeft: '140px',
              }}
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 50,
                }}
                className="carouselImg"
                style={{
                  display: 'flex',
                  padding: '40px',
                  margin: 'auto',
                  justifyContent: 'end',
                  textAlign: 'end',
                }}
              >
                <img
                  className="carouselImg"
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
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 50,
                }}
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
              </motion.div>
            </Carousel>
          </Col>
        </Col>
      </Row>
    </div>
  </Container>
);

export default HeroSection;
