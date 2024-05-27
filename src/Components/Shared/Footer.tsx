import React from 'react';
import Container from '../UI/UX/Container';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa6';
import { LiaLinkedin } from 'react-icons/lia';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FooterBg, PrimaryBg } from '../../Styles/Index';

const Footer: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Container style={FooterBg}>
      <Row gutter={[16, 16]}>
        <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div style={{ display: 'block', justifyContent: 'center' }}>
            <h6
              style={{
                margin: '10px 0px',
                fontSize: '24px',
              }}
            >
              About us
            </h6>
            <div
              style={{
                width: '120px',
                height: '2px',
                marginTop: '20px',
                ...PrimaryBg,
              }}
            ></div>
            <ul
              style={{
                display: 'block',
                padding: '0px',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <p>
                {' '}
                <Link to="/about">Our Values</Link>
              </p>
              <p>
                {' '}
                <Link to="/about">Our approach</Link>
              </p>
              <p>
                {' '}
                <Link to="/about">Our Event</Link>
              </p>
              <p>
                <Link to="/about">Career's</Link>
              </p>
            </ul>
          </div>
        </Col>
        <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div>
            <h6
              style={{
                margin: '10px 0px',
                fontSize: '24px',
              }}
            >
              Take Action
            </h6>
            <div
              style={{
                width: '120px',
                height: '2px',
                marginTop: '20px',
                ...PrimaryBg,
              }}
            ></div>
            <ul
              style={{
                display: 'block',

                padding: '0px',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <p>
                {' '}
                <Link to="/about">Become member</Link>
              </p>
              <p>
                <Link to="/about">Support our campaigns</Link>
              </p>
              <p>
                {' '}
                <Link to="/about"> investigations</Link>
              </p>
              <p>
                <Link to="/about"> Explore plant-based living</Link>
              </p>
            </ul>
          </div>
        </Col>
        <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div>
            <h6
              style={{
                margin: '10px 0px',
                fontSize: '24px',
              }}
            >
              Our work
            </h6>
            <div
              style={{
                width: '120px',
                height: '2px',
                marginTop: '20px',
                ...PrimaryBg,
              }}
            ></div>
            <ul
              style={{
                display: 'block',
                color: 'white',
                padding: '0px',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <p>
                {' '}
                <Link to="/about">Live export</Link>
              </p>
              <p>
                {' '}
                <Link to="/about">Government and policy</Link>
              </p>
              <p>
                {' '}
                <Link to="/about"> Protecting our planet</Link>
              </p>
              <p>
                {' '}
                <Link to="/about"> Reduce Proverty</Link>
              </p>
            </ul>
          </div>
        </Col>
        <Col span={6} xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div>
            <h6
              style={{
                margin: '10px 0px',
                fontSize: '24px',
              }}
            >
              Contact us
            </h6>
            <div
              style={{
                width: '120px',
                height: '2px',
                marginTop: '20px',
                ...PrimaryBg,
              }}
            ></div>
            <ul
              style={{
                display: 'flex',

                padding: '0px',
                gap: '20px',
                marginTop: '20px',
              }}
            >
              <p>
                {' '}
                <FaFacebook
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </p>
              <p>
                {' '}
                <LiaLinkedin
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </p>
              <p>
                {' '}
                <BsInstagram
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </p>
              <p>
                {' '}
                <BsWhatsapp
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </p>
            </ul>
          </div>
        </Col>

        <Col span={6} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div
            style={{
              margin: '10px 0px',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '2px',
                marginTop: '20px',
                ...PrimaryBg,
              }}
            ></div>
            <p style={{ margin: '20px' }}>
              {' '}
              {currentYear} Developed and Desingned and All Rights Deserverd by
              <Link
                style={{ marginLeft: '10px' }}
                to="https://web.whatsapp.com/"
              >
                Kutub Uddin
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
