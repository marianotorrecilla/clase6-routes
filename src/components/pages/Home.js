import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Jumbotron, Button,Image } from 'react-bootstrap';
import './Home.css';
import Banner from '../../resources/rickymorty.png';

const Home = () => {
    return(
        <>
          <Container>
              <Row>
                      <Col md="12" lg="12" xs="12" className="mt-3">
                         <Jumbotron className="text-center mt-5">
                             <Image src={Banner} fluid />
                             <h1>La APP de Cristian y Mariano</h1>
                             <p>
                                 Desde esta aplicación podrás consultar distintos personajes de Rick and Morty
                             </p>
                             <Button className="boton mt-1 btn-small" variant="dark">
                                      <Link to={'/personajes'} style={{color:'white'}}>INGRESAR</Link>
                             </Button>
                         </Jumbotron>
                      </Col>
              </Row>
          </Container>

        </>
    )
};

export default Home;