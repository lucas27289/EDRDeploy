import { Link } from '@remix-run/react'
import { Row, Col, Image } from 'react-bootstrap'
import logoIco from '~/../public/logoico.ico'


export default function VideoListItem({id, title}:{id: string, title: string}) {
    return (
        <Row className='border rounded mx-0 p-0 mt-2'>
            <Col className='d-flex align-items-middle videoListItem py-2'>
                <Image 
                    src={logoIco}
                    className='my-auto'
                    style={{height: '20px'}}
                    fluid 
                />
                <Link to={`/watch?videoId=${id}`} className='ms-3 text-decoration-none'>
                    <p className='font-red fs-5 my-auto'>{title}</p>
                </Link>
            </Col>
        </Row>
    )
}