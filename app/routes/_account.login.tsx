import { PrismaClient } from "@prisma/client";
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react"
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { createUserSession, getUserId, login } from "~/utils/session.server";


export let loader:LoaderFunction = async ({ request }) => {

    let user = await getUserId(request);
    if(user)
        throw redirect('/profile');

    return null;
}


export let action:ActionFunction = async ({ request }) => {
    let formData = await request.formData(); 

    let email = formData.get('email')?.toString();
    let password = formData.get('password')?.toString();

    if(email === '' || email === undefined)
        return json({
            message: "Email es requerido"
        })

    if(password === '' || password === undefined)
        return json({
            message: "Pasword es requerida"
        })

    const user = await login({ email, password });

    if(!user)
        return json({
            message: "Usuario o clave invalidos"
        })

    return createUserSession(user.id, '/profile');

}

export default function Login() {

    let fetcher = useFetcher();

    return (
        <Container fluid className="m-0 p-0 px-2 px-md-0">
            <Row className="justify-content-center m-0 p-0">
                <p className="f-white fs-4 text-center my-5 fw-bolder">Ingresar</p>
                <Col xs={12} md={7} lg={6} className="my-3 p-4 f-white allBorders">
                    <fetcher.Form method="post">
                        <Row className="mt-3 fs-5">
                            <Col xs={12} md={4}>
                                <label htmlFor="email">Email</label>
                            </Col>
                            <Col xs={12} md={8}>
                                <input id="email" name="email" type="text" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        <Row className="mt-3 fs-5">
                            <Col xs={12} md={4}>
                                <label htmlFor="password">Password</label>
                            </Col>
                            <Col xs={12} md={8}>
                                <input id="password" name="password" type="password" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        {
                            fetcher.data && fetcher.state !== "submitting" &&
                            <Alert variant="info" className="text-center my-2">{fetcher.data.message}</Alert>
                        }
                        <Row className="justify-content-end mt-4">
                            <Col xs={12} md={6} lg={4}>
                                <Button type="submit" className="my-3 w-100 p-2">Ingresar</Button>
                            </Col>
                        </Row>
                    </fetcher.Form>
                </Col>
            </Row>
        </Container>
    )
}