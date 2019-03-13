import React, { Component } from 'react';
import '../App.css';

//importo componentes para la barra de navegación
import Navbar from 'react-bootstrap/Navbar'
import Brand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import Link from 'react-bootstrap/NavLink'
import LoginForm from './loginForm'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/DropdownItem'
import { connect } from 'react-redux';
import loginForm from '../redux/actions/loginForm'
import isLogOut from '../redux/actions/isLogOut'
import { withRouter } from 'react-router-dom'

class NavbarBlack extends Component {

    constructor(props){
        super(props);
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.logOut = this.logOut.bind(this);
        
        
    }

    openForm(){
        const { loginForm } = this.props;
        loginForm(true);
    }

    closeForm(){
        const {loginForm} = this.props;
        loginForm(false);    
    }


    logOut(){
        const {isLogOut} = this.props;
        isLogOut();
        this.props.history.push('/');     
    }

    render() {
        const {logged} = this.props;
        console.log(logged);
        return (
            <Navbar className= "App-NavbarBlack" fixed="top" variant="dark">
            <Container>
                <Brand href="/">NoThatEasyTaxi</Brand>
                {logged.loggedIn ? <Nav className="mr-auto">
                <DropdownButton drop={'down'} variant="warning" title={`${logged.payload.usuario.nombre} ${logged.payload.usuario.apellido}`} id="desplegable" key="down">
                <DropdownItem eventKey="1">Perfil</DropdownItem><DropdownItem eventKey="2">Acerca de</DropdownItem></DropdownButton>
                </Nav>: <Nav className="mr-auto">
                    <Link href="/#services">Servicios</Link>
                    <Link href="/#registro">Registro</Link>
                    </Nav>}
                {logged.loggedIn ? 
                <Button variant="dark" onClick={this.logOut}>Log out</Button> : 
                <Button variant="primary" onClick={this.openForm}>Iniciar sesión</Button>}
                <LoginForm showlog={this.props.showlog} closeLog={this.closeForm}></LoginForm>
            </Container>
            </Navbar>
        );
    }


}

const mapStateToProps = state => ({
    ...state,
    logged: state.authenticated,
    showlog: state.activarLogin
});

const mapDispatchToProps = {
    isLogOut,
    loginForm
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarBlack));