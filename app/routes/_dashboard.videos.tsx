import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Container, Row } from "react-bootstrap";
import VideoListItem from "~/components/videlListItem";
import { db } from "~/utils/db.server";
import { getUserId } from "~/utils/session.server";


export let loader:LoaderFunction = async({ request }) => {
    let userId = await getUserId(request);
    if(!userId)
        throw redirect('/login');

    let user = await db.user.findUnique({
        where: {
            id: userId
        },
        include: {
            videos: true
        }
    });

    if(!user)
        return null;

    console.log(user.videos)

    return json({
        videos: user.videos
    })
}

export default function Videos() {

    let data = useLoaderData<typeof loader>();

    return (
        <Container fluid>
            <Row className="fs-4 my-3">
                Mis videos
            </Row>
            <Row>
                {
                    data.videos.map((v: any, index: number) => {
                        return (
                            <VideoListItem key={index} id={v.id} title={v.title} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}