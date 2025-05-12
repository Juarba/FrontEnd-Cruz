import { Container, Row, Col, Nav, Navbar, Button, Card } from 'react-bootstrap';

const ExperienceSection = () => {
  return (
    <section className="py-5 bg-white ">
      <Container>
        <Row className="align-items-centerflex-column-reverse flex-md-row">
          <Col md={6}>
            <h2 className="fw-bold colortxt mb-4">UNA EXPERIENCIA MEDIOAMBIENTALMENTE RESPONSABLE</h2>
            <p className="colortxt mb-4">
           
            LA VIEJA BUSCA PROMOVER MÁS QUE UN DESTINO DE BIENESTAR Y DESCONEXION.
            REFUERZA EL COMPROMISO CON UN PROFUNDO RESPETO POR EL ENTORNO. BUSCA MINIMIZAR EL IMPACTO ECOLÓGICO,
            PROTEGIENDO SU ECOSISTEMA Y PRESERVANDO SU ESPECTACULAR RIQUEZA NATURAL.
            </p>
            <Button className="colorbutton rounded-pill px-4">
              RESERVAR CAMPING
            </Button>
          </Col>
          <Col md={6} className="mb-4 mb-md-0">
            <img 
              src="/public/images/experienceboy.png" 
              alt="Experiencia única" 
              className="img-fluid" 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;