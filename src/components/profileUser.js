import React, { Component } from 'react';
import '../App.css';

//importo componentes para formulario
import Container from 'react-bootstrap/Container'
import MyInfo from './myInfo'
import { connect } from 'react-redux'
import Direcciones from './direcciones'


class profileUser extends Component {

    //Propiedades
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            
            <header className="usuario_open">
                <Container className="App-align-center">
                    <MyInfo></MyInfo>
                    <button type="button" className="btn btn-default btn-circle btn-xl">PEDIR TAXI</button></Container>
                    <Direcciones></Direcciones>
            </header>


        );
    }
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(profileUser);