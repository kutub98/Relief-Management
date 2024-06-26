import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import { FiMenu } from 'react-icons/fi';

import logo from '../../assets/logo.jpg';
import { MenuItems } from '../../libs/Menu/MenuItems';
import { FaXmark } from 'react-icons/fa6';
import { Menus } from '../../libs/Menu/Menu';
import { Link } from 'react-router-dom';
import Container from '../UI/UX/Container';
import { motion } from 'framer-motion';
const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <motion.nav
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '999',
        background: 'linear-gradient(90deg, #4152e0, #ba11f4)',
        boxShadow: '0px, 6px	16px	0px rgba(0, 0, 0, 0.8)',
      }}
    >
      <Container>
        <Row
          style={{
            color: 'white',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Col xs={6} sm={6} md={6} xl={4} lg={4}>
            <Link to="/">
              <div className="logo">
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </Link>
          </Col>
          <Col xs={0} sm={0} md={0} lg={12}>
            <Menu
              mode="horizontal"
              style={{
                background: 'none',
                justifyContent: 'end',
              }}
            >
              <MenuItems
                name="Home"
                href="/"
                key="7"
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
              <MenuItems
                name="All Releifs"
                href="relief"
                key="8"
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
              <MenuItems
                name="What we do"
                href="about"
                key="9"
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
              <MenuItems
                name="Login"
                href="login"
                key="10"
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
              <MenuItems
                name="Logout"
                href="logout"
                key="11"
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
              <MenuItems
                name="Donate"
                href="donate"
                key="12"
                style={{
                  padding: '12px 20px ',
                  borderRadius: '6px',
                  background: 'white',
                  color: 'red',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
            </Menu>
          </Col>
          {visible ? (
            <Col
              style={{
                textAlign: 'end',
              }}
              xs={12}
              sm={12}
              md={12}
              lg={0}
              onClick={() => setVisible(!visible)}
            >
              <FaXmark
                style={{
                  height: '40px',
                  width: '40px',
                  color: 'white',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
            </Col>
          ) : (
            <Col
              style={{
                textAlign: 'end',
              }}
              xs={12}
              sm={12}
              md={12}
              lg={0}
              onClick={() => setVisible(!visible)}
            >
              <FiMenu
                style={{
                  height: '40px',
                  width: '40px',
                  color: 'white',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />
            </Col>
          )}
        </Row>
      </Container>
      {/* // visible */}
      <Col lg={0}>
        {visible && (
          <Col style={{ display: visible ? 'block' : 'none' }}>
            <Menus />
          </Col>
        )}
      </Col>
    </motion.nav>
  );
};

export default Navbar;
