import { Container, Row, Col, Nav, Navbar, Button, Card } from 'react-bootstrap';
const HeroBanner = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url(/images/herobanner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <Container className="position-relative text-center text-white">
        <h1 className="display-4 fw-bold mb-4">DISFRUTE DE UN VERANO ÚNICO</h1>
        <Button  size="lg" className="colorbg colortxtbutton  fw-bold  rounded-pill px-4">
          ABONAR TEMPORADA
        </Button>
      </Container>
    </section>
  );
};

export default HeroBanner;