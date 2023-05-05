import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { useFetcher, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { db } from "~/utils/db.server";
import { isAdminUser } from "~/utils/session.server";


export let loader:LoaderFunction = async ({ request }) => {

    let isAdmin = await isAdminUser(request);
    if(!isAdmin)
        throw redirect('/notAllowed')

    return null;
}

export let action:ActionFunction = async ({ request }) => {

    let formData = await request.formData();

    let title = formData.get('videoTitle')?.toString();
    let description = formData.get('videoDescription')?.toString();
    let url = formData.get('videoUrl')?.toString();

    let newVideo = await db.videos.create({
        data: {
            title: title!,
            description: description!,
            url: url!,
        }
    })

    if(newVideo)
        return json({
            success: true,
            message: "video created"
        })

    else
        return json({
            success: false,
            message: "video not created"
        })
}

export default function UploadaVideo() {

    let fetcher = useFetcher();
    let navigate = useNavigate();

    useEffect(()=>{
        if(fetcher.data)
            if(fetcher.data.success)
                setTimeout(()=>{
                    navigate('/adminPage');
                },2000)
    },[fetcher])

    return (
            <Col className="mx-auto border rounded p-3 my-3" xs={12} md={8} lg={9}>
                <Row>
                    <p className="fs-4 fw-bolder">Subir video</p>
                </Row>
                <fetcher.Form method='post'>
                    <Row className="mt-3">
                        <Col xs={12} md={6} lg={4} className="d-flex">
                            <label className="w-100 align-self-center" htmlFor="videoTitle">Titulo del video</label>
                        </Col>
                        <Col xs={12} md={6} lg={8}>
                            <input id="videoTitle" className="w-100 px-1 py-2 border rounded" name="videoTitle" type="text" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={12} md={6} lg={4} className="d-flex">
                            <label className="w-100 align-self-center" htmlFor="videoDescription">
                                Descripcion del video
                            </label>
                        </Col>
                        <Col xs={12} md={6} lg={8}>
                            <input id="videoDescription" className="w-100 px-1 py-2 border rounded" name="videoDescription" type="text" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={12} md={6} lg={4} className="d-flex">
                            <label htmlFor="videoUrl" className="w-100 align-self-center">Url del video</label>
                        </Col>
                        <Col xs={12} md={6} lg={8}>
                            <input id="videoUrl" className="w-100 px-1 py-2 border rounded" name="videoUrl" type="text" />
                        </Col>
                    </Row>
                    {
                        fetcher.data &&
                        <Alert variant="info" className="text-center my-2">
                            {fetcher.data.message}
                        </Alert>
                    }
                    <Row className="justify-content-end">
                        <Col xs={8} md={6} lg={4}>
                            <Button variant="primary" className="w-100 mt-4" type="submit">Subir</Button>
                        </Col>
                    </Row>
                </fetcher.Form>
            </Col>
   );
}