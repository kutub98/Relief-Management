import Container from '../UI/UX/Container';

const Footer = () => {
  return (
    <Container
      style={{
        left: '0',
        bottom: '0',
        width: '100%',
      }}
    >
      <h1
        className="text"
        style={{
          fontWeight: 'bold',
          fontSize: '60px',
          color: 'white',
          background: 'red',
        }}
      >
        Footer
      </h1>
    </Container>
  );
};

export default Footer;
