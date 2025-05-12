import { Container, Row, Col, Nav, Navbar, Button, Card } from 'react-bootstrap';
import './DayBanner.css'
const DayBanner = () => {
  return (
    <section className=" bgcolor">
  <Container fluid>
    <Row className="align-items-center flex-column flex-md-row">
      {/* Columna de la imagen */}
      <Col md={6} className="p-0">
        <img 
          src="/images/DayBanner.png" 
          alt="Experiencia única" 
          className="img-fluid w-100 h-100 object-fit-cover" 
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </Col>

      {/* Columna del texto */}
      <Col md={6} className="py-5 px-4">
        <h4 className="txtcolor mb-4">LA VIEJA, EL SECRETO MEJOR GUARDADO DE CRUZ ALTA</h4>
        <p className="txtcolor mb-4">
          DISEÑADAS PARA CAPTURAR EL DESLUMBRANTE ESPLENDOR NATURAL DE CRUZ ALTA,
          CADA RINCÓN DE LA PILETA PROMETE UNA EXPERIENCIA QUE VA MÁS ALLÁ DEL SIMPLE DÍA EN FAMILIA O CON AMIGOS.
        </p>
        <Button className="colorbg colortxtbutton fw-bold rounded-pill px-4">
          PAGAR DÍA
        </Button>
      </Col>
    </Row>
  </Container>
</section>

  );
};

export default DayBanner;