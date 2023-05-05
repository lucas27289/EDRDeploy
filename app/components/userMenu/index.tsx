
import { Link } from "@remix-run/react";
import { Accordion } from "react-bootstrap";

export default function UserMenu() {
    return (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Mi Perfil</Accordion.Header>
                <Accordion.Body>
                  <Link to='/profile' className="py-2 ms-3 text-decoration-none">Editar</Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Mis cursos</Accordion.Header>
                <Accordion.Body className="d-flex flex-column">
                  <Link to='/videos' className="py-2 ms-3 text-decoration-none">Mis videos</Link>
                  <Link to='/books' className="py-2 ms-3 text-decoration-none">Mis libros</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        );
}