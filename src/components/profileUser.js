import React, { Component } from 'react';
import '../App.css';

//importo componentes para formulario
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyInfo from './myInfo'
import { connect } from 'react-redux'

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
                <Container className="App-header-services text-white">
                    <Row>
                        <Col md={12}>
                            <h2 className="text-center">MIS VIAJES</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-clock fa-7x"></i>
                                <h2>Conduce</h2>
                                <p>Conduce cuando quieras</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                
                                <i className="far fa-money-bill-alt fa-7x"></i>
                                <h2>Genera ganancias</h2>
                                <p>Consigue más viajes</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-file-invoice-dollar fa-7x"></i>
                                <h2>Una sola factura</h2>
                                <p>Conozca sus ingresos detalladamente</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-shield-alt fa-7x"></i>
                                <h2>Conduce seguro</h2>
                                <p>Transporta solo a usuarios registrados</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="App-header-services text-white">
                    <Row>
                        <Col md={12}>
                            <h2 className="text-center">MIS DIRECCIONES</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-map-marker fa-7x"></i>
                                <h2>NombreFavorito</h2>
                                <p>Direccion</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-map-marker fa-7x"></i>
                                <h2>NombreFavorito</h2>
                                <p>Direccion</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-map-marker fa-7x"></i>
                                <h2>NombreFavorito</h2>
                                <p>Direccion</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="App-box-services text-center">
                                <i className="fas fa-map-marker fa-7x"></i>
                                <h2>NombreFavorito</h2>
                                <p>Direccion</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            
                        </Col>
                        <Col md={6}>
                            
                        </Col>
                    </Row>
                </Container>
            </header>


        );
    }
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(profileUser);