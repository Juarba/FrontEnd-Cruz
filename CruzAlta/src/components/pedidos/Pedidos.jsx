import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import ItemCard from "../itemCard/ItemCard";

const Pedidos = () => {
  const [comidas, setComidas] = useState([]); // Estado para comidas
  const [menus, setMenus] = useState([]); // Estado para menús
  const [pedido, setPedido] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { role } = useAuth();

  // Función para obtener menús desde la API con autenticación por token
  const fetchMenus = async () => {
    const token = localStorage.getItem("jwtToken");
    const res = await fetch("https://localhost:7042/api/Menus", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Error al cargar menús");
    return await res.json(); // Retorna JSON con la lista de menús
  };

  // Nueva función para obtener comidas desde la API con token
  const fetchComidas = async () => {
    const token = localStorage.getItem("token"); // o de donde guardes el token

    const res = await fetch("https://localhost:7042/api/Comidas/GetAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // este es clave para autorización
      },
    });
    if (!res.ok) throw new Error("Error al cargar comidas");
    return await res.json();
  };

  useEffect(() => {
    // Función para obtener menús y comidas y actualizar estados
    const fetchData = async () => {
      try {
        setLoading(true);
        const [menusData, comidasData] = await Promise.all([
          fetchMenus(),
          fetchComidas(),
        ]);
        setMenus(menusData);
        setComidas(comidasData);
      } catch (err) {
        console.error("Error al cargar datos:", err);
        setError("No se pudieron cargar menús o comidas.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Funciones para agregar y eliminar ítems al pedido (menús o comidas)
  const agregarAlPedido = (item) => {
    if (!item || typeof item.precio !== "number") {
      console.warn("Item inválido al agregar al pedido:", item);
      return;
    }
    setPedido((prev) => [...prev, item]);
  };

  const eliminarDelPedido = (index) => {
    setPedido((prev) => prev.filter((_, i) => i !== index));
  };

  // Calcula subtotal sumando precios de todos los items en pedido
  const subtotal = pedido.reduce((sum, item) => {
    if (!item || typeof item.precio !== "number") return sum;
    return sum + item.precio;
  }, 0);

  // Función para enviar el pedido a la API
  const cargarPedido = async () => {
    if (pedido.length === 0) {
      alert("Debes agregar al menos una comida o menú.");
      return;
    }

    const idMenus = pedido.filter((p) => p.tipo === "menu").map((p) => p.id);
    const idComidas = pedido
      .filter((p) => p.tipo === "comida")
      .map((p) => p.id);

    const now = new Date();
    const HoraEntrega = new Date(now.getTime() + 60 * 60 * 1000); // +1 hora

    const dto = {
      FechaPedido: now.toISOString(),
      HoraPedido: now.toISOString(),
      HoraEntrega: HoraEntrega.toISOString(),
      idCliente: 1,
      idDelivery: null,
      Estado: 0,
      MetodoEntrega: 1,
      idMenus,
      idComidas,
    };
    console.log("DTO enviado:", dto);
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await fetch("https://localhost:7042/api/Pedido/Add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dto),
      });

      if (!res.ok) throw new Error(await res.text());

      alert("Pedido cargado con éxito");
      setPedido([]);
    } catch (err) {
      console.error(err);
      alert("Error al cargar el pedido: " + err.message);
    }
  };

  if (loading)
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" />
      </Container>
    );

  if (error)
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  return (
    <Container fluid>
      <h2 className="my-4">Crea tu Pedido</h2>
      <Row>
        <Col md={8}>
          <h4>Menús</h4>
          <Row>
            {menus.map((menu) => (
              <Col key={menu.idMenu} xs="auto">
                <ItemCard
                  item={{
                    id: menu.idMenu,
                    nombre: menu.nombre,
                    precio: menu.precio ?? 0,
                    imagenUrl: menu.imagenUrl,
                  }}
                  onAgregarAlPedido={() =>
                    agregarAlPedido({
                      id: menu.idMenu,
                      nombre: menu.nombre ?? "Sin nombre",
                      precio: menu.precio ?? 0,
                      tipo: "menu",
                    })
                  }
                />
              </Col>
            ))}
          </Row>

          {/* Aquí agregamos el renderizado de comidas */}
          <h4 className="mt-4">Comidas</h4>
          <Row>
            {comidas.map((comida) => (
              <Col key={comida.idComida} xs="auto">
                <ItemCard
                  item={{
                    id: comida.idComida,
                    nombre: comida.comida,
                    precio: comida.precio ?? 0,
                    imagenUrl: comida.imagenUrl,
                  }}
                  onAgregarAlPedido={() =>
                    agregarAlPedido({
                      id: comida.idComida,
                      nombre: comida.nombre ?? "Sin nombre",
                      precio: comida.precio ?? 0,
                      tipo: "comida",
                    })
                  }
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>Resumen del Pedido</Card.Header>
            <Card.Body style={{ maxHeight: "500px", overflowY: "auto" }}>
              {pedido.length === 0 ? (
                <p>No hay comidas ni menús en el pedido.</p>
              ) : (
                <ListGroup>
                  {pedido.map((item, idx) => (
                    <ListGroup.Item
                      key={`${item.id}-${idx}`}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.nombre}</strong>{" "}
                        {typeof item.precio === "number"
                          ? `($${item.precio.toFixed(2)})`
                          : "(Precio no disponible)"}
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => eliminarDelPedido(idx)}
                      >
                        ×
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between align-items-center">
                <strong>Subtotal:</strong> <span>${subtotal.toFixed(2)}</span>
              </div>
              <Button
                className="mt-2 w-100"
                variant="success"
                onClick={cargarPedido}
              >
                Cargar Pedido
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pedidos;
