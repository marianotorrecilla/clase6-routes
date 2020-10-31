import React from 'react';

import {Card, Container, Row, Col} from 'react-bootstrap';
import useGet from './../../services/useHTTP';

const Personaje = ({ match }) => {
    console.log(match.params.id);
    const [personaje, isFetching, error] = useGet({url: `https://rickandmortyapi.com/api/character/${match.params.id}`,})
    //const [personajes, isFetching, error] = useGet({url: "https://rickandmortyapi.com/api/character/",})
    return(
        <>
          <Container>
              <Row>
                      <Col md="4" lg="4" xs="12">
                          <Card key={personaje.id}>
                              <Card.Img variant="top" src={personaje.image}></Card.Img>
                              <Card.Body>
                                  <Card.Title>{personaje.name}</Card.Title>
                                  <Card.Text>{personaje.status}</Card.Text>
                                  <Card.Text>{personaje.gender}</Card.Text>
                                  <Card.Text>{personaje.spicies}</Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>

                  
              </Row>
         </Container>

        </>
    )
};

export default Personaje;