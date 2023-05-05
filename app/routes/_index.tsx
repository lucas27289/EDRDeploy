import { Link, V2_MetaFunction } from "@remix-run/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import {  useState } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import flechas1 from "~/../public/img/flechas-1.png";
import infra from '~/../public/img/infra.svg';
import instaLogo from "~/../public/img/instaLogo.png";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Escuela de Rap" }];
};

export default function Index() {

  const { scrollY } = useScroll();
  let [transform, setTransform] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setTransform(latest)
  })

  function transformX(magnifier: number){
    return transform * 0.798 * magnifier
  }

  function transformY(magnifier: number){
    return -transform * 0.6018 * magnifier
  }

  
  return (
    <Container className=" p-0 maxw-1300px pt-5 bgImage f-ptSans mb-0"  fluid>
      <Row className="m-0 p-0 pt-3 position-relative overflow-hidden">
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(0.8)}px, ${transformY(0.8)}px) rotate(-37deg)`, top:'5%', left:'5%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(1.1)}px, ${transformY(1.1)}px) rotate(-37deg)`, top:'12%', left:'50%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(1.9)}px, ${transformY(1.9)}px) rotate(-37deg)`, top:'74%', left:'15%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(2.8)}px, ${transformY(2.8)}px) rotate(-37deg)`, top:'50%', left:'40%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(1.2)}px, ${transformY(1.2)}px) rotate(-37deg)`, top:'75%', left:'85%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(1.5)}px, ${transformY(1.5)}px) rotate(-37deg)`, top:'15%', left:'25%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(2)}px, ${transformY(2)}px) rotate(-37deg)`, top:'95%', left:'-10%%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(1.8)}px, ${transformY(1.8)}px) rotate(-37deg)`, top:'85%', left:'-5%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(0.8)}px, ${transformY(0.8)}px) rotate(-37deg)`, top:'100%', left:'78%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(1)}px, ${transformY(1)}px) rotate(-37deg)`, top:'100%', left:'50%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(0.6)}px, ${transformY(0.6)}px) rotate(-37deg)`, top:'100%', left:'30%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(0.4)}px, ${transformY(0.4)}px) rotate(-37deg)`, top:'100%', left:'10%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute rayo" style={{height: '2px', width: '60px', transform: `translate(${transformX(0.7)}px, ${transformY(0.7)}px) rotate(-37deg)`, top:'25%', left:'80%'}}></div>
          
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '5vh', width: '25vh', transform: `translate(${transformX(1.8)}px, ${transformY(1.8)}px) rotate(-37deg)`, top:'10%', left:'5%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '1vh', width: '25vh', transform: `translate(${transformX(3.2)}px, ${transformY(3.2)}px) rotate(-37deg)`, top:'16%', left:'5%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '5vh', width: '30vh', transform: `translate(${transformX(1.5)}px, ${transformY(1.5)}px) rotate(-37deg)`, top:'25%', left:'35%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '2vh', width: '30vh', transform: `translate(${transformX(2.9)}px, ${transformY(2.9)}px) rotate(-37deg)`, top:'42%', left:'1%'}}></div>     
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '5vh', width: '25vh', transform: `translate(${transformX(2)}px, ${transformY(2)}px) rotate(-37deg)`, top:'80%', left:'-5%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '3vh', width: '20vh', transform: `translate(${transformX(1.9)}px, ${transformY(1.9)}px) rotate(-37deg)`, top:'70%', left:'25%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '1vh', width: '20vh', transform: `translate(${transformX(0.7)}px, ${transformY(0.7)}px) rotate(-37deg)`, top:'68%', left:'25%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '3vh', width: '30vh', transform: `translate(${transformX(2.1)}px, ${transformY(2.1)}px) rotate(-37deg)`, top:'15%', left:'75%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '5vh', width: '20vh', transform: `translate(${transformX(1.2)}px, ${transformY(1.2)}px) rotate(-37deg)`, top:'29%', left:'70%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '1vh', width: '30vh', transform: `translate(${transformX(0.9)}px, ${transformY(0.9)}px) rotate(-37deg)`, top:'65%', left:'65%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '4vh', width: '30vh', transform: `translate(${transformX(0.7)}px, ${transformY(0.7)}px) rotate(-37deg)`, top:'100%', left:'-25%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '1vh', width: '20vh', transform: `translate(${transformX(0.9)}px, ${transformY(0.9)}px) rotate(-37deg)`, top:'70%', left:'-5%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '1vh', width: '20vh', transform: `translate(${transformX(1.4)}px, ${transformY(1.4)}px) rotate(-37deg)`, top:'100%', left:'20%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '3vh', width: '35vh', transform: `translate(${transformX(0.9)}px, ${transformY(0.9)}px) rotate(-37deg)`, top:'100%', left:'28%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '3vh', width: '35vh', transform: `translate(${transformX(0.9)}px, ${transformY(0.9)}px) rotate(-37deg)`, top:'100%', left:'48%'}}></div>
          <div className="d-none d-md-flex decorationForm position-absolute" style={{height: '5vh', width: '25vh', transform: `translate(${transformX(0.6)}px, ${transformY(0.6)}px) rotate(-37deg)`, top:'100%', left:'10%'}}></div>

          <Col xs={12} md={6} className="m-0 p-0 triangulo f-white position-relative">
            <h1 className="position-absolute text-outline zIndex-5 w-100" style={{top:'10%', left: '10%'}}>
              <span className="text-stroke-1">Bienvenidos a</span>
              <br/>
              <span className="text-stroke-2">Escuela de Rap</span>
            </h1>
            <h5 className="position-absolute zIndex-5" style={{top:'22%', left: '10%'}}>Escuela y entrenamiento<br />para batallas</h5>
            <Image src={flechas1} className="h-30px position-absolute" style={{top:'30%', left: '10%'}} fluid />
              <h4 className="position-absolute zIndex-5 fs-5" style={{top:'37%', left: '10%'}}>
                Conocé nuestros
                <br />
                <span className="text-stroke-3">MÉTODOS DE</span>
                <br/>
                <span className="text-stroke-4">ENTRENAMIENTO</span>
              </h4>
            <Row className="m-0 p-0 d-flex d-md-none position-absolute start-0 px-4 w-100" style={{top:'60%'}}>
              <Col xs={12} md={6} className="bg-custom-dark py-3 forma1-sm">
                  <p className="text-center">Es el momento de llevar tu<br/>freestyle al nivel que vos elijas</p>
                  <p className="text-center bg-violet p-1">¿Estás listo para dar el siguiente paso?</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="d-none d-md-flex flex-column justify-content-center align-items-center f-white my-5 my-md-0 zIndex-5">
            <div className="forma1 p-0 my-sm-5 zIndex-5">
              <div className="bg-custom-dark p-5 zIndex-5" style={{width: '100%', height:'100%', borderRadius: '20px'}}>
                <p className="text-start zIndex-5">Es el momento de llevar tu<br/>freestyle al nivel que vos elijas</p>
                <p className="text-start zIndex-5">¿Estás listo para dar el siguiente paso?</p>
              </div>
            </div>
          </Col>
      </Row>

      <Col xs={12} className="m-0 p-0 d-md-none mt-5">
        <Row className="m-0 my-2"><Link to="#videocurso1" className="mx-auto"><Button variant="primary" className="w-100 py-3"><span className="fs-5">VIDEOCURSO 1</span><br/>"¿Cómo entrenar?"</Button></Link></Row>
        <Row className="m-0 my-2"><Link to="#videocurso2" className="mx-auto"><Button variant="primary" className="w-100 py-3"><span className="fs-5">VIDEOCURSO 2</span><br/>"El pareado y las cuatrogeneraciones"</Button></Link></Row>
        <Row className="m-0 my-2"><Link to="#videocurso3" className="mx-auto"><Button variant="primary" className="w-100 py-3"><span className="fs-5">VIDEOCURSO 3</span><br/>Clases online con profesor</Button></Link></Row>
      </Col>

      <Col xs={11} md={11} className="d-none d-md-flex mx-auto mt-5 pt-5 pt-md-0 mt-md-0">
        <Row className="justify-content-center f-white coursesSection m-0 mt-5 px-5 py-4">
          <Col xs={12} md={4} className="mb-5 mb-md-0">
            <Row className="m-0"><p className="text-center fs-3">VIDEOCURSO</p></Row>
            <Row className="m-0"><p className="text-center fs-5">¿Cómo entrenar?</p></Row>
            <Row className="redToVioletBorderColorRight m-0"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p></Row>
            <Row className="m-0"><Link to="#videocurso1" className="w-75 mx-auto"><Button variant="grey" className="w-100">Ver Curso</Button></Link></Row>
          </Col>
          <Col xs={12} md={4} className="mb-5 mb-md-0">
            <Row className="m-0"><p className="text-center fs-3">VIDEOCURSO</p></Row>
            <Row className="m-0"><p className="text-center fs-5">¿Cómo entrenar?</p></Row>
            <Row className="redToVioletBorderColorRight m-0"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p></Row>
            <Row className="m-0"><Link to="#videocurso2" className="w-75 mx-auto"><Button variant="grey" className="w-100">Ver Curso</Button></Link></Row>
          </Col>
          <Col xs={12} md={4}>
            <Row className="m-0"><p className="text-center fs-3">VIDEOCURSO</p></Row>
            <Row className="m-0"><p className="text-center fs-5">¿Cómo entrenar?</p></Row>
            <Row className="m-0"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p></Row>
            <Row className="m-0"><Link to="#videocurso3" className="w-75 mx-auto"><Button variant="grey" className="w-100">Ver Curso</Button></Link></Row>
          </Col>
        </Row>
      </Col>

      
      <Row className="justify-content-center randomLinea f-white mx-0 px-1">
        <Col xs={12} md={11} className="d-flex flex-column justify-content-center ">
          <Row className="mx-2 mx-md-0 p-0">
            <Row id="videocurso1" className="fs-5 p-0 pt-5 m-0 justify-content-center justify-content-md-start"><span className="topSideBordersRVBW p-2 px-4">VIDEOCURSO 1</span></Row>
            <Col xs={12} md={10} className="py-5 px-5 courseborderRV mb-0 mb-md-5">
              <Row className="fs-5 pb-1 m-0">¿Cómo entrenar?</Row>
              <Row className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</Row>
              <Row className="m-0 my-2 d-md-none"><Link to="" className="mx-auto my-4"><Button variant="primarySquare" className="w-100 py-3">Comprar curso</Button></Link></Row>
            </Col>
            <Col xs={8} md={2} className=" d-none d-md-block px-1 mb-4 mt-1 my-md-auto mx-auto">
              <Row className="m-0"><Link to="#" className="w-100 p-0"><Button variant="grey mb-2 w-100">Comprar curso</Button></Link></Row>
              <Row className="m-0"> <Image src={flechas1} className="h-30px w-auto" fluid /></Row>
            </Col>
          </Row>
          <Row className="mx-2 mx-md-0 p-0">
            <Row id="videocurso2" className="fs-5 p-0 m-0 pt-5 justify-content-center justify-content-md-start"><span className="topSideBordersVRBW p-2 px-4">VIDEOCURSO 1</span></Row>
            <Col xs={12} md={10}  className="py-5 px-5 bg-custom-dark mb-0 mb-md-5 courseborderVR">
              <Row className="fs-5 pb-1 m-0">¿Cómo ent</Row>
              <Row className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</Row>
              <Row className="m-0 my-2 d-md-none"><Link to="" className="mx-auto my-4"><Button variant="primarySquare" className="w-100 py-3">Comprar curso</Button></Link></Row>
            </Col>
            <Col xs={8} md={2} className=" d-none d-md-block px-1 mt-1 mb-4 my-md-auto mx-auto">
              <Row className="m-0 p-0"><Link to="#" className="w-100 p-0"><Button variant="grey mb-2 w-100">Comprar curso</Button></Link></Row>
              <Row className="m-0"> <Image src={flechas1} className="h-30px w-auto" fluid /></Row>
            </Col>
          </Row>
          <Row className="mx-2 mx-md-0 p-0">
            <Row id="videocurso3" className="fs-5 p-0 m-0 pt-5 justify-content-center justify-content-md-start"><span className="topSideBordersRVBW p-2 px-5">ENTRENAMIENTO ONLINE</span></Row>
            <Col xs={12} md={10}  className="py-5 px-5 bg-custom-dark mb-2 courseborderRV">
              <Row className="fs-5 pb-1 m-0">¿Cómo entrenar?</Row>
              <Row className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</Row>
              <Row className="m-0 my-2 d-md-none"><Link to="" className="mx-auto my-4"><Button variant="primarySquare" className="w-100 py-3">Comprar curso</Button></Link></Row>
            </Col>
            <Col xs={8} md={2} className=" d-none d-md-block px-1 mt-1 mb-4 my-md-auto mx-auto">
              <Row className="m-0"><Link to="#" className="w-100 p-0"><Button variant="grey mb-2 w-100">Comprar curso</Button></Link></Row>
              <Row className="m-0"> <Image src={flechas1} className="h-30px w-auto" fluid /></Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row  className="mx-0 my-5 p-0 justify-content-center">
        <Col xs={12} md={11} className="position-relative zIndex-5">
          <Row className="m-0 p-0 justify-content-center mx-auto">
            <h2 className="f-white mt-5 py-2">
              <p className="text-stroke-5 fs-1">El legado de todos, </p>
              <p className="text-stroke-6 fs-5">el arte de cada uno</p>
            </h2>
          </Row>
          <Row className="m-0 p-0">
            <Col xs={12} md={5} className="px-5 p-md-0 m-0 d-flex justify-content-center">
              <Image className="infraImg" src={infra} fluid />
            </Col>
            <Col xs={12} md={7} >
              <p className="f-white fs-6 px-3 my-3 my-md-0 ">
                Profesor en Letras. Docente en diversos niveles. Creador y Director de la “Escuela de Rap”,
                 escuela de freestyle que funciona de manera virtual por discord y ciclos a distancia.
                  Ex Juez de la FMS y cronista de Urban Rooster. En la  actualidad brinda varios talleres 
                  relacionados con el hiphop en distintos colegios y proyectos. Brindó una clínica de rap 
                  -cinco clases- en la Universidad de Morelia, México. Realiza periódicamente videos para 
                  su canal de Youtube acerca del tema. En relación a la poesía, participó del proyecto “la escuela 
                  lee más” como capacitador y responsable del curso “Leer poesía hoy”. Como escritor editó cinco libros 
                  de poesía y dictó diversos talleres de escritura creativa. Fundó el festival Poesía, de acá y la editorial 
                  de poesía Semipiso. En la actualidad dirige la editorial Goles Rosas. Guionista del proyecto cinematográfico  
                  Cortázar en un minuto, proyecto que celebraba los cien años del autor presentando una serie de cortos de un minuto.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      

      <footer className="row m-0 p-0 position-relative align-content-center justify-content-between">
          <Col xs={5} className="d-none d-md-flex"></Col>
          <Col xs={12} md={7} className="zIndex-5 f-white footerText d-flex flex-column justify-content-center justify-content-md-start">
                <Button id="instaBtn" variant="btn-white-text" className="px-0" href="https://instagram.com" target="_blank">
                  <Image src={instaLogo} className="w-40px" fluid />
                  <span className="f-white ps-2 fs-3">Edr.infranich</span>
                </Button>
                <p className="text-stroke-7 fs-6 mx-auto mx-md-0">ENTERATE SOBRE SEMINARIOS GRATUITOS,</p>
                <p className="text-stroke-8 fs-6 mx-auto mx-md-0">CLASES ABIERTAS, CHARLAS CON MC'S,</p>
                <p className="text-stroke-9 fs-6 mx-auto mx-md-0">ACTUALIDA Y SORTEOS.</p>
          </Col>
      </footer>


    </Container>
  );
}
