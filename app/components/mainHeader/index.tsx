import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3CenterLeftIcon, PlayIcon, UserIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { Button, Col, Offcanvas, Row, Image } from "react-bootstrap";
import instaLogo from "~/../public/img/instaLogo.png";
import edrLogo from "~/../public/img/logo.png";

export default function MainHeader() {

    let navigate = useNavigate();
    let [showMenu, setShowMenu] = useState(false);


    function navigateTo(route: string) {
        setShowMenu(false);
        navigate(route);
    }

    return(
        <>
            <Row className="d-none d-lg-block m-0 p-0">
                <Col className="m-0 px-5 py-3 bg-custom-dark">
                    <Row className="m-0 p-0 justify-content-evenly mx-4 bg-custom-dark py-3 redToVioletBorderColor">
                        <Col xs={2} className="f-white my-auto">
                            <Link to="/">
                                <Image src={edrLogo} className="h-40px" fluid />
                            </Link>
                        </Col>
                        <Col xs={7} md={6}>
                            <Row>
                                <Col xs={4} className="d-flex justify-content-center align-items-center border-end border-2 grey-border-color">
                                <Link to="">
                                    <Button variant="white-text fw-bold">
                                        Sobre Infranich
                                    </Button>
                                </Link>
                                </Col>
                                <Col xs={4} className="d-flex justify-content-center align-items-center border-end border-2 grey-border-color">
                                    <Link to="" className=" text-decoration-none d-flex justify-content-center align-items-center">
                                        <span className="me-2 h-30px w-40px bg-white rounded d-flex justify-content-center align-items-center">
                                            <PlayIcon className="h-15px w-15px my-auto dark-filled" />
                                        </span>
                                        <span className="f-white fw-bold">
                                            Suscribite
                                        </span>
                                    </Link>
                                </Col>
                                <Col xs={4} className="d-flex justify-content-center align-items-center f-white fw-bold">
                                    <Link to="" className="f-white text-decoration-none">
                                        <Image src={instaLogo} className="h-30px me-2" fluid />
                                        Edr.infranich
                                    </Link>
                                </Col>
                            </Row>
                            
                            
                        </Col>
                        <Col xs={3} className="pe-4 d-flex justify-content-end">
                            <Link to="/login">
                                <Button variant="primary" className="fw-bold">
                                    <UserIcon className="h-24px w-24px me-2" />
                                    Iniciar sesión
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Col className="m-0 p-0 ps-2 py-3 d-lg-none bg-custom-dark h-100">
                <Button variant="primary" onClick={()=>setShowMenu(!showMenu)}>
                    <Bars3CenterLeftIcon className="h-40px w-40px f-white" />
                </Button>

                <Offcanvas show={showMenu} onHide={()=>setShowMenu(false)}>
                    <Offcanvas.Header className="bg-custom-dark f-white py-3">
                        <Offcanvas.Title className="w-100">
                            <Row className="m-0 p-0">
                                <Col xs={10}>
                                    <Image src={edrLogo} className="h-40px m-0 p-0" onClick={()=>{navigateTo("/")}} fluid />
                                </Col>
                                <Col xs={2} className="m-0 p-0">
                                    <Button variant="primary" className="pe-2" onClick={()=>{setShowMenu(false)}}>
                                        <XMarkIcon className="h-40px w-40px" />
                                    </Button>
                                </Col>
                            </Row>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="f-white bg-custom-dark" style={{overflow: 'auto'}}>
                        <Col className="minh-500px d-flex flex-column justify-content-between align-items-center">
                            <Row className="w-75">
                                <Row className="p-0 m-0 mt-5 redToVioletBorderColor py-2">
                                    <Link to="">
                                        <Button variant="white-text fw-bold">
                                            Sobre Infranich
                                        </Button>
                                    </Link>
                                </Row>
                                <Row className="m-0 p-0 mt-5 redToVioletBorderColor py-2 ps-3">
                                    <Link to="" className=" text-decoration-none d-flex">
                                        <span className="me-2 h-30px w-40px bg-white rounded d-flex justify-content-center align-items-center">
                                            <PlayIcon className="h-15px w-15px my-auto dark-filled" />
                                        </span>
                                        <span className="f-white fw-bold">
                                            Suscribite
                                        </span>
                                    </Link>
                                </Row>
                                <Row className="m-0 p-0 f-white fw-bold mt-5 align-items-center ps-3 redToVioletBorderColor py-2">
                                    <Image src={instaLogo} className="w-60px" fluid />
                                    Edr.infranich
                                </Row>
                            </Row>
                            <Row className="w-100">
                                <Button variant="primary" className="fw-bold py-3 my-2 mx-auto w-75" onClick={()=>navigateTo("/login")}>
                                    <UserIcon className="h-24px w-24px me-2" />
                                    Iniciar sesión
                                </Button>
                            </Row>
                        </Col>
                    </Offcanvas.Body>
                </Offcanvas>
{/*

                <Row className="m-0 p-0 justify-content-evenly align-items-between mx-4 bg-custom-dark py-3">
                    <Row className="m-0 p-0">
                        <Col>
                            <Bars3CenterLeftIcon className="h-40px w-40px f-white" onClick={()=>setShowMenu(!showMenu)} />
                        </Col>
                    </Row>
                    {
                        showMenu &&
                        <Row className="m-0 p-0 ms-2 pt-3 f-white bg-grey position-absolute top-0 start-0" style={{zIndex: 99999, width: '100vw', height: '100vh'}}>
                            <Col xs={12} className="m-0 p-0 h-100">
                                
                                <Row className="m-0 p-0 ps-2">
                                    <Col xs={8} >
                                        
                                    </Col>                                    
                                </Row>
                                
                                
                            </Col>
                            
                        </Row>
                    }
                </Row>*/}
            </Col>
    </>
    )
}