import { Col, Row } from 'antd';
import Container from '../../Components/UI/UX/Container';
import ReliefCard from '../../Components/UI/UX/ReliefCard';
import PrimaryButton from '../../Components/UI/UX/PrimaryButton';
import React from 'react';

const AllReleifGoods: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <h1 style={{ margin: '50px 0' }}>All Relief Goods</h1>
      <Row gutter={[18, 18]}>
        <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ReliefCard />
        </Col>
        <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ReliefCard />
        </Col>
        <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ReliefCard />
        </Col>
        <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ReliefCard />
        </Col>
        <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ReliefCard />
        </Col>
        <Col span={8} xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <ReliefCard />
        </Col>
      </Row>
      <PrimaryButton href="/reliefs" style={{ margin: '40px' }}>
        View All
      </PrimaryButton>
    </Container>
  );
};

export default AllReleifGoods;
