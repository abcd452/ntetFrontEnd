import React, { Component } from 'react'
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class LoginForm extends React.Component {


    constructor(props, context) {
      super(props, context);

    }

  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.props.press}>
            Iniciar sesión
          </Button>
  
          <Modal show={this.props.showlog} onHide={this.props.secondPress}>
            <Modal.Header closeButton>
              <Modal.Title>Bienvenido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Num de celular</Form.Label>
                        <Form.Control placeholder="Digite su numero celular registrado" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Digite la contraseña" />
                    </Form.Group>
                    </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.secondPress}>
                Salir
              </Button>
              <Button variant="primary" onClick={this.props.secondPress}>
                Iniciar sesión
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

export default LoginForm;