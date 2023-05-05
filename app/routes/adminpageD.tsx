import { XMarkIcon } from "@heroicons/react/24/outline";
import { ActionFunction, LoaderFunction, json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { redirect } from "react-router";
import AdminListItem from "~/components/adminLisItem";
import { db } from "~/utils/db.server";
import { getUserId, isAdminUser } from "~/utils/session.server";

export let loader:LoaderFunction = async ({ request }) => {
    let isAdmin = await isAdminUser(request);

    if(!isAdmin)
        throw redirect('/notAllowed');

    let users = await db.user.findMany({
        select: {
            id: true,
            email: true,
        }
    });

    let videos = await db.videos.findMany({
        select: {
            title: true,
            id: true,
        }
    });

    return json({
        users: users,
        videos: videos
    })
}

export let action:ActionFunction = async ({ request }) => {

    let isAdmin = await isAdminUser(request);
    if(!isAdmin)
        throw redirect("/notAllowed");

    let formData = await request.formData();
    let action = formData.get("__action")?.toString();

    if(action == "asignVideo") {
        let userId = formData.get("user")?.toString();
        let videoId = formData.get("video")?.toString();

        let result = await db.user.update({
            where: {
                id: userId!,
            },
            data: {
                videos : {
                    connect: { id: videoId}
                }
            },
            include: {
                videos: true
            }
        })

        console.log(result);

        return json({
            success: true
        })
    }

    const url = new URL(request.url);
    const videoId = url.searchParams.get("videoId")?.toString();
    console.log(videoId);

    let result = await db.videos.delete({
        where: {
            id: videoId
        }
    })

    if(result)
        return json({
            success: true,
        })

    else
        return json({
            success: false
        })
}

export default function AdminPage() {

    let data = useLoaderData<typeof loader>();
    let [showAdminMenu, setShowAdminMenu] = useState(false);

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={9} lg={2} className="d-flex justify-content-end">
                    {
                        !showAdminMenu ?
                        <Button variant="primary" onClick={()=>{setShowAdminMenu(true)}}>Admin Menu</Button>
                        :
                        <Button variant="link" onClick={()=>{setShowAdminMenu(false)}}><XMarkIcon style={{width: '40px', height: '40px'}} /></Button>
                    }
                </Col>
            </Row>
            <Row>
                {
                    showAdminMenu &&
                    <Col xs={12} md={3} lg={2}>
                        <Link to='/createvideo'>
                            Crear video
                        </Link>
                    </Col>
                }
                <Col xs={12} md={9} lg={10}>
                    <Row>
                        <Col className="border p-5 m-3">
                            <Row className="fs-4 fw-bold">Asignar video</Row>
                            <Row>
                                <Col>
                                    <Form method="post">
                                        <Row className="justify-content-start my-3">
                                            <Col xs={12} md={5} lg={4} className="text-end">
                                                <label htmlFor='userId' >Usuario</label>
                                            </Col>
                                            <Col xs={12} md={5} lg={4}>
                                                <select id='user' name='user' className="w-100 py-2 border rounded">
                                                    {
                                                        data.users.map((u: any,index: number) => {
                                                            return(
                                                                <option key={index} value={u.id}>{u.email}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-start my-3">
                                            <Col xs={12} md={5} lg={4} className="text-end">
                                                <label htmlFor='video' >Video</label>
                                            </Col>
                                            <Col xs={12} md={5} lg={4}>
                                                <select id="video" name='video' className="w-100 py-2 border rounded">
                                                    {
                                                        data.videos.map((v: any,index: number) => {
                                                            return(
                                                                <option key={index} value={v.id}>{v.title}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="flex-row-reverse">
                                            <Col xs={12} md={6} lg={4} className="d-flex justify-content-end">
                                                <Button variant="primary" type="submit" value="asignVideo" name="__action" className="w-100 my-2">Asignar</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs={12} md={6} lg={5} className="border m-3 p-5">
                            <Row>
                                <p className="fs-4 fw-bold">Videos</p>
                            </Row>
                            {
                                data.videos.map((v: any, index: number) => {
                                    return (
                                        <AdminListItem key={index} title={v.title} id={v.id} />
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}