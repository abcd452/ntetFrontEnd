import React, { Component } from 'react'
import '../App.css';
import Footer from '../components/footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

//componente: Formulario de usuario y conductor
import FormUser from '../components/formUser'
import FormDriver from '../components/FormDriver'


class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {text:''}
        this.onChanged = this.onChanged.bind(this);
        this.customForm = this.customForm.bind(this);
        
    }

    onChanged(event){
        let textR = event.target.value;
        this.setState({
        text: textR.replace(/[^0-9]/g, '')
        });
    }


    render(){
        return(
            <div className="App">
                {this.customForm(this.props.role)}
                <Footer></Footer>
            </div>
        );    
    }


    customForm(role) {
        if (role === 'Usuario') {
            return (
                <FormUser enventPress={this.props.enventOnPress}/>
            );
        }else{
            return(
                <FormDriver enventPress={this.props.enventOnPress}/>
            );
        }
    }



}    

export default Signin;
