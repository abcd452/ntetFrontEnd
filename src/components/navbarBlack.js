import React, { Component } from 'react';
import '../App.css';

//importo componentes para la barra de navegación
import Navbar from 'react-bootstrap/Navbar'
import Brand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import Link from 'react-bootstrap/NavLink'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import LoginForm from './loginForm'
import Container from 'react-bootstrap/Container';

class NavbarBlack extends Component {

    constructor(props){
        super(props);
        console.log(this.props);    
    }

    render() {
        return (
            <Navbar className= "App-NavbarBlack" fixed="top" variant="dark">
            <Container>
                <Brand href="/">NoThatEasyTaxi</Brand>
                <Nav className="mr-auto">
                    <Link href="/#services">Servicios</Link>
                    <Link href="/#registro">Registro</Link>
                    <Link href="#">Contactanos</Link>
                </Nav>
                <LoginForm showlog={this.props.doShow} press={this.props.enventOnPress} secondPress={this.props.enventOnPressAdd}></LoginForm>
            </Container>
            </Navbar>
        );
    }
}

export default NavbarBlack;