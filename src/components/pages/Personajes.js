import React from 'react';
import {Link} from 'react-router-dom';
import useGet from './../../services/useHTTP';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';

const Personajes = () => {
    const [personajes, isFetching, error] = useGet({url: "https://rickandmortyapi.com/api/character/",})
    return(
        <>
          <Container>
              <Row>
              {personajes.map((personaje) => (
                      <Col md="4" lg="4" xs="12">
                        
                          <Card key={personaje.id}>
                              <Card.Img variant="top" src={personaje.image}></Card.Img>
                              <Card.Body>
                                  <Card.Title>{personaje.name}</Card.Title>
                                  <Card.Text>{personaje.status}</Card.Text>
                                  <Card.Text>{personaje.spicies}</Card.Text>
                                  <Card.Text>{personaje.gender}</Card.Text>
                                  <Button variant="primary" block>
                                      <Link to={`/personajes/${personaje.id}`}>Ver Más</Link>
                                  </Button>
                              </Card.Body>
                          </Card>
                      </Col>
                  ))}
                  
              </Row>
          </Container>

        </>
    )
};

export default Personajes;