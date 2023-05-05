import { Outlet } from "@remix-run/react";
import { Container, Row, Col } from "react-bootstrap";
import UserMenu from "~/components/userMenu";

export default function Dashboard() {
    return (
        <Container fluid>
            <Row className="my-5">
                <Col xs={12} md={6} lg={4}>
                    <UserMenu />
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}