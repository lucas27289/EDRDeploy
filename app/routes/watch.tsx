import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "~/utils/db.server";
import { getUserId } from "~/utils/session.server";

export let loader:LoaderFunction = async({ request }) => {
    
    let userId = await getUserId(request)
    const url = new URL(request.url);
    const videoId = url.searchParams.get("videoId")?.toString();
    console.log(videoId)
    let videoData = await db.videos.findUnique({
        where: {
            id: videoId
        }
    });

    if(!videoData)
        return json({
            videoUrl: "NOT found"
        })
    return json({
        video: videoData
    })
}

export default function WatchVideo() {

    let { video } = useLoaderData<typeof loader>();

    return (
        <Container fluid>
            <Row><p className="fs-4 fw-bold p-0 px-3 m-0 my-3">{video.title}</p></Row>
            <Row>
                <Col xs={12} lg={6} className="px-2 m-0">
                    <div style={{position: 'relative', paddingTop: '56.25%'}}>
                        <iframe 
                            src={video.url} 
                            loading="lazy" 
                            style={{border: 'none', position: 'absolute', top: '0', height: '100%', width: '100%'}} 
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen={true}
                        />
                    </div>
                </Col>
                <Col xs={12} lg={6} className="px-2 m-0 my-xs-2 my-md-0">
                    <p>{video.description}</p>
                </Col>
            </Row>
        </Container>
    )
}