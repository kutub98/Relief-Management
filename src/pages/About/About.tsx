import Container from '../../Components/UI/UX/Container';
import { Col, Row } from 'antd';
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
        <h1>What we do </h1>
        <div
          style={{
            height: '4px',
            margin: '0 auto',
            width: '200px',
            ...PrimaryBg,
          }}
        ></div>
      </div>
      <div>
        <Row gutter={[{ xs: 16, sm: 16, md: 16, lg: 32 }, 20]}>
          <Col
            className="gutter-row"
            xs={24}
            sm={10}
            md={10}
            lg={8}
            xl={8}
            style={{ background: 'gray' }}
          >
            <div className="gutter-box">col-6</div>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            sm={10}
            md={10}
            lg={8}
            xl={8}
            style={{ background: 'gray' }}
          >
            <div className="gutter-box">col-6</div>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            sm={10}
            md={10}
            lg={8}
            xl={8}
            style={{ background: 'gray' }}
          >
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
