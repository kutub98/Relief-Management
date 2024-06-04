import { motion } from 'framer-motion';

import { Col, Row } from 'antd';
import Container from '../../Components/UI/UX/Container';
import { Card } from 'antd';
import CountUp from 'react-countup';
const AboutUs = () => {
  return (
    <Container style={{ margin: '40px auto' }}>
      <div>
        <h1 style={{ fontSize: '30px', margin: '20px 0' }}>What we do</h1>
      </div>
      <Row gutter={24}>
        <Col
          id="firstCol"
          className=""
          span={12}
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card hoverable className="aboutCard">
              <p style={{ color: 'red', fontWeight: 'bold' }}>How is start</p>
              <h1 className="aboutHeadline">
                Our dream is to reduce poverty from Rural Area <br />
              </h1>
              <h4
                style={{
                  marginTop: '70px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'gray',
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                reiciendis perferendis recusandae impedit ipsa sequi dolorum
                voluptatibus cumque rerum, vel fugiat! Rerum quod aliquam,
                praesentium cupiditate quibusdam voluptas voluptate molestiae?
              </h4>
            </Card>
          </motion.div>
        </Col>
        <Col
          id="secondCol"
          className=""
          span={12}
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
          >
            <Card hoverable className="aboutCard">
              <img
                src="https://i0.wp.com/dor2dor.co.uk/wp-content/uploads/2022/11/What-Are-The-Best-Ways-To-Distribute-Leaflets.jpg?fit=1200%2C801&ssl=1"
                alt=""
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '8px',
                  boxShadow:
                    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                }}
              />
            </Card>
            <Row gutter={[8, 8]} style={{ margin: '10px 0px' }}>
              <Col
                className=""
                span={12}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <Card>
                  <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    <CountUp end={15} enableScrollSpy={true} duration={1.5} />
                  </h1>
                  <h4 style={{ textAlign: 'center' }}>Total Event</h4>
                </Card>
              </Col>
              <Col
                className=""
                span={12}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <Card>
                  <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    <CountUp end={15} enableScrollSpy={true} duration={1.5} />
                  </h1>
                  <h4 style={{ textAlign: 'center' }}>Total Sector</h4>
                </Card>
              </Col>
              <Col
                className=""
                span={12}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <Card>
                  <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    <CountUp end={15} enableScrollSpy={true} duration={1.5} />
                    <span style={{ marginLeft: '10px' }}>Lacks</span>
                  </h1>
                  <h4 style={{ textAlign: 'center' }}>Total Collection</h4>
                </Card>
              </Col>
              <Col
                className=""
                span={12}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
              >
                <Card>
                  <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    <CountUp end={15} enableScrollSpy={true} duration={1.5} />
                    <span style={{ marginLeft: '10px' }}>Lacks</span>
                  </h1>
                  <h4 style={{ textAlign: 'center' }}>Total Distributed</h4>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
