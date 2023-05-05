import { Prisma, PrismaClient } from "@prisma/client";
import { ActionFunction, json } from "@remix-run/node";
import { Link, useFetcher, useNavigate } from "@remix-run/react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import bcrypt from "bcryptjs";
import { db } from "~/utils/db.server";
import { useEffect } from "react";

export let action:ActionFunction = async ({request}) => {

    let formData = await request.formData();

    let name = formData.get('name')?.toString();
    let surname = formData.get('surname')?.toString();
    let email = formData.get('email')?.toString();
    let password = formData.get('password')?.toString();
    let repeatPassword = formData.get('repeatPassword')?.toString();

    if(name == '')
        return json({
            error: true,
            message: "El nombre es requerido"
        })

    if(surname !== '')
        return json({
            error: true,
            message: "El apellido es requerido"
        })

    if(email !== '')
        return json({
            error: true,
            message: "El email es requerido"
        })

        if(password !== '')
        return json({
            error: true,
            message: "El password es requerido"
        })


    if(password?.localeCompare(repeatPassword!) != 0)
        return json({
            error: true,
            message: "Los password deben coincidir"
        })

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash)
debugger;
    try {
        let user = await db.user.create({
            data: {
                name: name!,
                surname: surname!,
                passwordHash: passwordHash,
                email: email!.toLowerCase(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })

        return json({
            error: false,
            message: ''
        })
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return json({
                error: true,
                message: "El usuario ya se encuentra registrado"
            })
          } else {
            return json({
                error: true,
                message: "Error al crear usuario"
            })
        }
    }
}


export default function Register() {

    let fetcher = useFetcher();
    let navigate = useNavigate();
    let isSubmitting = fetcher.state === 'submitting';

    useEffect(()=>{
        if(fetcher.data)
            if(!fetcher.data.error)
                navigate('/login')
    },[fetcher])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="my-3 border rounded border-grey" xs={11} md={7} lg={5}>
                    <fetcher.Form method="post">
                        <Row className="mt-3 fs-5 fw-bolder">
                            <Col xs={12} md={6}>
                                <label htmlFor="name">Nombre</label>
                            </Col>
                            <Col xs={12} md={6}>
                                <input id="name" name="name" type="text" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        <Row className="mt-3 fs-5 fw-bolder">
                            <Col xs={12} md={6}>
                                <label htmlFor="surname">Apellido</label>
                            </Col>
                            <Col xs={12} md={6}>
                                <input id="surname" name="surname" type="text" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        <Row className="mt-3 fs-5 fw-bolder">
                            <Col xs={12} md={6}>
                                <label htmlFor="email">Email</label>
                            </Col>
                            <Col xs={12} md={6}>
                                <input id="email" name="email" type="text" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        <Row className="mt-3 fs-5 fw-bolder">
                            <Col xs={12} md={6}>
                                <label htmlFor="password">Password</label>
                            </Col>
                            <Col xs={12} md={6}>
                                <input id="password" name="password" type="password" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        <Row className="mt-3 fs-5 fw-bolder">
                            <Col xs={12} md={6}>
                                <label htmlFor="repeatPassword">Repetir password</label>
                            </Col>
                            <Col xs={12} md={6}>
                                <input id="repeatPassword" name="repeatPassword" type="password" className="w-100 p-2 border border-grey rounded" />
                            </Col>
                        </Row>
                        {
                            fetcher.data && fetcher.data.error && 
                            <Alert variant="danger"  className="mt-1 ext-center">{fetcher.data.message}</Alert>
                        }
                        <Row className="justify-content-end">
                            <Col xs={12} md={6} lg={4}>
                                <Button 
                                    type="submit" 
                                    className="my-3 w-100 p-2" 
                                    disabled={isSubmitting}
                                >
                                    {!isSubmitting ? "Registrarse" : "Guardando..."}
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <p>
                                ¿Ya tienes una cuenta?
                                <Link to="/login" className="ps-2">Ir a login</Link>
                            </p>
                        </Row>
                    </fetcher.Form>
                </Col>
            </Row>
        </Container>
    )
}