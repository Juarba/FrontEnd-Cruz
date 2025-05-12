// Componente Header (Navbar)

import { Navbar, Container, Nav } from "react-bootstrap";
const LayoutNav = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/logo-la-kesa.png" alt="LA VIEJA" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="colortxt fw-bold">TEMPORADA</Nav.Link>
            <Nav.Link href="#lakesa" className="colortxt fw-bold">DÍA</Nav.Link>
            <Nav.Link href="#camping" className="colortxt fw-bold">DECK</Nav.Link>
            <Nav.Link href="#descubre" className="colortxt fw-bold">CAMPING</Nav.Link>
            <Nav.Link href="#descubre" className="colortxt fw-bold">RECORRIDO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LayoutNav;