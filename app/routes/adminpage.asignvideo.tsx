import { LoaderFunction, redirect, json, ActionFunction } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react"
import { useEffect, useState } from "react";
import { Col, Row, Button, Alert } from "react-bootstrap"
import { db } from "~/utils/db.server";
import { isAdminUser } from "~/utils/session.server";


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

        
        if(result)
            return json({
                success: true
            })
        else
            return json({
                success: false
            })
    }
}


export default function AsignVideo() {

    let data = useLoaderData<typeof loader>();
    let fetcher = useFetcher();
    let [showSubmittingMessage, setShowSubmittingMessage] = useState(false);
    let [hasSubmittionError, setHasSubmittionError] = useState(false);
    let isSubmitting = fetcher.state === 'submitting';

    useEffect(()=>{
        if(isSubmitting) {
            setHasSubmittionError(false)
            setShowSubmittingMessage(true);
        }
    },[isSubmitting])

    useEffect(()=>{
        setTimeout(()=>{
            setShowSubmittingMessage(false)
        },2000)
    },[showSubmittingMessage])

    useEffect(()=>{
        if(!showSubmittingMessage && fetcher.data && !fetcher.data.success)
            setHasSubmittionError(true)
    },[showSubmittingMessage])

    
    return (
        <Col xs={12} md={8} lg={9}>
                    <Row>
                        <Col className="border p-5 m-3">
                            <Row className="fs-4 fw-bold">Asignar video</Row>
                            <Row>
                                <Col>
                                    <fetcher.Form method="post">
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
                                        {
                                            showSubmittingMessage &&
                                            <Alert variant="info" className="text-center my-1">Guardando</Alert>
                                        }
                                        {
                                            hasSubmittionError &&
                                            <Alert variant="danger" className="text-center my-1">Error al guardar</Alert>
                                        }
                                        <Row className="flex-row-reverse">
                                            <Col xs={12} md={6} lg={4} className="d-flex justify-content-end">
                                                <Button 
                                                    variant="primary" 
                                                    type="submit" 
                                                    value="asignVideo" 
                                                    name="__action" 
                                                    className="w-100 my-2" 
                                                    disabled={showSubmittingMessage}
                                                >
                                                    {
                                                        showSubmittingMessage ?
                                                        "Guardando..."
                                                        :
                                                        "Asignar"
                                                    }
                                                    
                                                </Button>
                                            </Col>
                                        </Row>
                                    </fetcher.Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
    )
}