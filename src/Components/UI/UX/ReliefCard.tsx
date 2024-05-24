import React from 'react';
import { Card } from 'antd';
const ReliefCard: React.FC = () => (
  <Card
    hoverable
    cover={
      <img
        style={{ height: '260px' }}
        alt="example"
        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
      />
    }
  >
    <div>
      <h1>Card one</h1>
      <p>Card one Description</p>
    </div>
  </Card>
);

export default ReliefCard;
