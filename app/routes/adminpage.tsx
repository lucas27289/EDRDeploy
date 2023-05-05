import { LoaderFunction, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Col, Container, Row } from "react-bootstrap";
import { redirect } from "react-router";
import AdminListItem from "~/components/adminLisItem";
import { db } from "~/utils/db.server";
import { isAdminUser } from "~/utils/session.server";

export let loader:LoaderFunction = async ({ request }) => {
    let isAdmin = await isAdminUser(request);

    if(!isAdmin)
        throw redirect('/notAllowed');

    return null;
}

export default function AdminPage() {


    return (
        <Container className="p-0" fluid>
            <Row className="m-0 p-0">
                <Col xs={12} md={4} lg={3} className="m-0 p-0 pt-4 bg-dark">
                    <Row 
                        className="m-0 p-0 fs-4 fw-bold" 
                        style={{height:' 50px', color:'white'}}
                    >
                        <p>Admin Menu</p>
                    </Row>
                    <Row 
                        className="m-0 p-0"
                    >
                        <Link 
                            to='/adminpage/courses' 
                            className="mt-2 py-1 font-red text-decoration-none"
                        >
                            <p className="text-center fs-6">Ver cursos subidos</p>
                        </Link>
                    </Row>
                    <Row 
                        className="m-0 p-0"
                    >
                        <Link 
                            to='/adminpage/uploadvideo' 
                            className="mt-2 py-1 font-red text-decoration-none"
                        >
                            <p className="text-center fs-6">Subir Video</p>
                        </Link>
                    </Row>
                    <Row 
                        className="m-0 p-0"
                    >
                        <Link 
                            to='/adminpage/asignvideo' 
                            className="mt-2 py-1 font-red text-decoration-none"
                        >
                            <p className="text-center fs-6">Asignar Video</p>
                        </Link>
                    </Row>
                </Col>
                <Outlet />
            </Row>
        </Container>
    )
}