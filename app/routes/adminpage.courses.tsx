import { LoaderFunction, redirect, json, ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Col, Row } from "react-bootstrap"
import AdminListItem from "~/components/adminLisItem"
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


export default function Index(){

    let data = useLoaderData<typeof loader>();
    
    return(
        <Col  xs={12} md={8} lg={7} className="border m-0 p-0 mx-auto my-4">
            <Row className="m-0 p-0">
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
    )
}