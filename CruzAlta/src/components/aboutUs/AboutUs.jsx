import { Container, Row, Col, Button, Card } from "react-bootstrap";

import "./AboutUs.css";
const AboutSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: "800px" }}>
          <h2 className="colortxt fw-bold mb-4">
            LA VIEJA, UN PARAÍSO A LA RIBERA DEL RIO CARCARAÑA
          </h2>
          <h5 className="colortxt text-muted">
            UNA PILETA ÚNICA, UN DÍA SUBLIME
            <br />
            DONDE TODO FUNCIONA DE UNA MANERA FAMILIAR, AMIGABLE Y PERFECTA,
            ELEVANDO CADA VISITA EN UNA MEMORABLE E IMBORRABLE EXPERIENCIA.
          </h5>
        </div>

        <Row className="mt-5 g-4 align-items-center justify-content-center">
          {/* Tarjetas de actividades */}
          <Col md={4}>
            <img
              src="/images/aboutus1.png"
              alt="Experiencia única"
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md={4}>
            <img
              src="/images/aboutus2.png"
              alt="Experiencia única"
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md={4}>
            <img
              src="/images/aboutus3.png"
              alt="Experiencia única"
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button className="colorbutton rounded-pill px-4">
            VER RECORRIDO
          </Button>
        </div>
      </Container>
    </section>
  );
};
export default AboutSection;
