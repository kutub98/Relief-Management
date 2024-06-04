import { Card } from 'antd';
import React from 'react';

interface ReliefCardProps {
  img: string;
  country: string;
}

const ReliefCard: React.FC<ReliefCardProps> = ({ img, country }) => (
  <Card
    className=""
    hoverable
    style={{ height: '' }}
    cover={<img style={{ height: '160px' }} alt="example" src={img} />}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1>Helping People </h1>
      <h3>{country}</h3>
    </div>
    <div>
      <p style={{ textAlign: 'left', fontSize: '15px', margin: '8px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        totam!
      </p>
      <button
        className="secondaryColor"
        style={{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '6px',
          fontSize: '20px',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        More Details
      </button>
    </div>
  </Card>
);

export default ReliefCard;
