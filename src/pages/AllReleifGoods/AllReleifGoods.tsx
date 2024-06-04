import { Col, Row } from 'antd';
import Container from '../../Components/UI/UX/Container';
import ReliefCard from '../../Components/UI/UX/ReliefCard';
import PrimaryButton from '../../Components/UI/UX/PrimaryButton';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/relief2.jpg';
import image3 from '../../assets/relief3.jpg';
import image4 from '../../assets/relief4.jpg';
import image5 from '../../assets/relief5.jpg';
import image6 from '../../assets/relief5.jpg';

const images = [
  { img: image1, country: 'France' },
  { img: image2, country: 'Bangladesh' },
  { img: image3, country: 'India' },
  { img: image4, country: 'Australia' },
  { img: image5, country: 'Canada' },
  { img: image6, country: 'Japan' },
];

const AllReliefGoods = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <div className="releifSticky">
        <h1>All Relief Goods</h1>
      </div>
      <Row gutter={[18, 18]}>
        {images.map((item, index) => (
          <Col
            key={index}
            span={8}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            xxl={8}
          >
            <div className="cardSticky">
              <ReliefCard {...item} />
            </div>
          </Col>
        ))}
      </Row>
      <PrimaryButton href="/reliefs" style={{ margin: '40px' }}>
        View All
      </PrimaryButton>
    </Container>
  );
};

export default AllReliefGoods;
