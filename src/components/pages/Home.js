import React from 'react';
import {Container, Row, Col, Jumbotron, Button,Image } from 'react-bootstrap';
import Banner from '../../resources/rickymorty.png';
const Home = () => {
    return(
        <>
          <Container>
              <Row>
                      <Col md="12" lg="12" xs="12">
                         <Jumbotron className="text-center mt-5">
                         <Image src={Banner} fluid />
                             <h1>La APP de Cristian y Mariano</h1>
                             <p>
                                 Desde esta aplicación podrás consultar distintos personajes de Rick and Morty
                             </p>

                          </Jumbotron>
                      </Col>
              </Row>
          </Container>

        </>
    )
};

export default Home;