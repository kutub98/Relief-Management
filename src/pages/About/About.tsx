import { Card, Col, Row } from 'antd';
import Container from '../../Components/UI/UX/Container';
import { PrimaryBg } from '../../Styles/Index';

const About = () => {
  return (
    <Container style={{ margin: '40px auto' }}>
      <div
        style={{
          display: 'block',
          margin: '40px auto',
          justifyContent: 'center',
          height: 'auto',
          textAlign: 'center',
          alignContent: 'center',
        }}
      >
        <h1>What we do</h1>
        <div
          style={{
            height: '4px',
            margin: '0 auto',
            width: '200px',
            ...PrimaryBg,
          }}
        ></div>
      </div>

      <Row gutter={24}>
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
          <Card hoverable className="aboutCard">
            <p style={{ color: 'red', fontWeight: 'bold' }}>How is start</p>
            <h1
              style={{
                fontSize: '40px',
                color: '',

                fontWeight: 'bold',
              }}
            >
              Our dream is to reduce poverty from Rural Area <br />
            </h1>
            {/* <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              reiciendis perferendis recusandae impedit ipsa sequi dolorum
              voluptatibus cumque rerum, vel fugiat! Rerum quod aliquam,
              praesentium cupiditate quibusdam voluptas voluptate molestiae?
            </h4> */}
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
                    20
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
                    15
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
                    15 lacks
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
                    15 lacks
                  </h1>
                  <h4 style={{ textAlign: 'center' }}>Total Distributed</h4>
                </Card>
              </Col>
            </Row>
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
          {/* </Card> */}
          <Card hoverable className="aboutCard">
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
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
