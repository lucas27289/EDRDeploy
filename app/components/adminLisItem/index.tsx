import { useFetcher, useNavigate } from "@remix-run/react"
import { Row, Col } from "react-bootstrap"
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function AdminListItem({
    title,
    id
    }
    :
    {
    title: string,
    id: string
}) {

    let fetcher = useFetcher();
    let navigate = useNavigate();

    let isDeleting = fetcher.state === 'submitting';

    function deleteVideo() {
        fetcher.submit({videoId: id},{method:'post', action: `/adminpage/courses?videoId=${id}`})
    }

    return (
        <Row className="border py-2 px-2 mx-1" style={{ opacity: isDeleting ? '0.5' : '1'}}>
            <Col xs={9}>{title}</Col>
            <Col xs={1} onClick={()=>{navigate(`/watch?videoId=${id}`)}}><EyeIcon style={{width:'30px', height: '30px'}} /></Col>
            <Col xs={1}><PencilSquareIcon style={{width:'30px', height: '30px'}} /></Col>
            <Col xs={1} onClick={()=>deleteVideo()}><TrashIcon style={{width:'30px', height: '30px'}} /></Col>
        </Row>
    )
}