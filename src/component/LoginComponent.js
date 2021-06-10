import React from 'react';
import { Container, Row ,Col, Form, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './css/LoginComponent.css'

const LoginConponent = ()=>{

  const login = ()=> { }

  

    return (<Container fluid style={{display:'flex',justifyContent:'center',marginTop:100}}>     
      <Row >
        <Col>
          <Card style={{padding:10}}>
            <Card.Img src=""/>
          <Card.Title style={{textAlign:'center',paddingTop:10}}>
            User login
          </Card.Title>
          <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter Username" />             
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>            
          </Form>
          <Card.Body className="text-center">
            <Button variant="primary" size="sm" type="submit">
              Login
            </Button>
          </Card.Body>          
          </Card.Body>                 
          </Card>
        </Col>
      </Row>
    
      </Container>)

}
export default LoginConponent;