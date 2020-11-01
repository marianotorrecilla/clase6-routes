import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import useGet from './../../services/useHTTP';
import './Personajes.css'

const Personaje = ({ match }) => {
    console.log(match.params.id);
    const [personaje, isFetching, error] = useGet({url: `https://rickandmortyapi.com/api/character/${match.params.id}`,})
    console.log(personaje);
    return(
        <>
          <Container>
              <Row className="mt-5 mb-5 justify-content-center">
                      <Col md="4" lg="4" xs="12" key={personaje.id} className="mt-5">
                          <Card >
                              <Card.Img className="p-2" variant="top" src={personaje.image}></Card.Img>
                              <Card.Body>
                                  <Card.Title className="titulo">{personaje.name}</Card.Title>
                                  <Card.Text className="texto">{personaje.status}</Card.Text>
                                  <Card.Text className="texto">{personaje.gender}</Card.Text>
                                  <Card.Text className="texto">{personaje.spicies}</Card.Text>
                                  <Button className="boton mt-1" variant="dark" block>
                                      <Link to={'/personajes'} style={{color:'white'}}>Volver</Link>
                                  </Button>
                              </Card.Body>
                          </Card>
                          
                      </Col>

                  
              </Row>
         </Container>

        </>
    )
};

export default Personaje;