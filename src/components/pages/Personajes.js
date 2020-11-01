import React from 'react';
import {Link} from 'react-router-dom';
import useGet from './../../services/useHTTP';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import './Personajes.css'

const Personajes = () => {
    const [personajes, isFetching, error] = useGet({url: "https://rickandmortyapi.com/api/character/",})
    return(
        <>
          <Container>
              <Row className="mt-5 mb-5">
              {personajes.map((personaje) => (
                      <Col md="4" lg="4" xs="12" key={personaje.id} >
                          <Card className="mx-auto mt-3">
                              <Card.Img className="p-2" variant="top" src={personaje.image}></Card.Img>
                              <Card.Body>
                                  <Card.Title className="titulo">{personaje.name}</Card.Title>
                                  <Card.Text className="texto">{personaje.status}</Card.Text>
                                  <Card.Text className="texto" >{personaje.spicies}</Card.Text>
                                  <Card.Text className="texto">{personaje.gender}</Card.Text>
                                  <Button className="boton" variant="dark" block>
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