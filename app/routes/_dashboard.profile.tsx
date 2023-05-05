import { LoaderFunction } from "@remix-run/node";
import { Container, Row } from "react-bootstrap";
import { requireUserId } from "~/utils/session.server";


export let loader:LoaderFunction = async({ request }) => {

    await requireUserId(request, '/login');


    return null;
}

export default function Profile() {
    return (
        <Container>
            <Row>Profile</Row>
        </Container>
    )
}