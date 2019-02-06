import React, { Component } from 'react';
import '../App.css';

//importo componentes para formulario
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


class Main extends Component {

    render() {
        return (

            <header className="App-header-main">
                <Container>
                    <Row>
                        <Col md={6}>
                            
                        </Col>
                        <Col md={6}>
                            <h1>UNA APP PENSADA PARA TAXISTAS</h1>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Main;
