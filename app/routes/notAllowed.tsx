import { Link } from "@remix-run/react";
import { Alert, Col, Container, Row } from "react-bootstrap";

export default function NotAllowed() {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={7} lg={5}>
                    <Alert variant="danger" className="text-center my-5">
                        La pagina solicitada no esta permitida
                    </Alert>
                    <Link to="/" className="my-2">Ir a Inicio</Link>
                </Col>
            </Row>
        </Container>
    )
}