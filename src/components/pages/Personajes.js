import React from 'react';
import {Link} from 'react-router-dom';
import useGet from './../../services/useHTTP';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';

const Personajes = () => {
    const [personajes, isFetching, error] = useGet({url: "https://rickandmortyapi.com/api/character/",})
    return(
        <>
          <Container>
              <Row className="mt-5">
              {personajes.map((personaje) => (
                      <Col md="4" lg="4" xs="12" key={personaje.id} >
                          <Card className="mx-auto mt-3">
                              <Card.Img variant="top" src={personaje.image}></Card.Img>
                              <Card.Body>
                                  <Card.Title>{personaje.name}</Card.Title>
                                  <Card.Text>{personaje.status}</Card.Text>
                                  <Card.Text>{personaje.spicies}</Card.Text>
                                  <Card.Text>{personaje.gender}</Card.Text>
                                  <Button variant="info" block>
                                      <Link to={`/personajes/${personaje.id}`} style={{color:'white'}}>Ver Más</Link>
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