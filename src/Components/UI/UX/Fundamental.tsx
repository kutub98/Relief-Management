import Container from './Container';
import { Col, Row } from 'antd';

import { FaDollarSign } from 'react-icons/fa6';
import { BsHandIndex } from 'react-icons/bs';
import { FaHandPaper } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { PrimaryBg } from '../../../Styles/Index';

const Fundamental = () => {
  return (
    <div
      style={{
        ...PrimaryBg,
        marginBottom: '30px',
      }}
    >
      <Container style={{ textAlign: 'center' }}>
        <Row gutter={[18, 18]}>
          <Col
            span={8}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            style={{ color: 'white', padding: '20px' }}
          >
            <div className="">
              <div className="icon">
                <div style={{ display: 'block' }}>
                  <FaDollarSign style={{ width: '40px', height: '40px' }} />
                </div>
                <div style={{ display: 'block' }}>
                  <BsHandIndex style={{ width: '40px', height: '40px' }} />
                </div>
                <h2>Help us By Donate</h2>
                <h3 style={{ fontSize: '40px' }}>Donate Now</h3>
              </div>
            </div>
          </Col>
          <Col
            span={8}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            style={{ color: 'white', padding: '20px' }}
          >
            <div className="">
              <div className="icon">
                <GiSelfLove style={{ width: '40px', height: '40px' }} />
                <h2>Collect Fund</h2>
                <h3 style={{ fontSize: '40px' }}>Fundarising</h3>
              </div>
            </div>
          </Col>
          <Col
            span={8}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            style={{ color: 'white', padding: '20px' }}
          >
            <div className="">
              <div className="icon">
                <FaHandPaper style={{ width: '40px', height: '40px' }} />

                <h2>Join with us</h2>
                <h3 style={{ fontSize: '40px' }}>Become a Volunteer</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fundamental;
