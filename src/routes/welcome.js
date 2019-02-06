import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import CardDeck from 'react-bootstrap/CardDeck'
import Footer from '../components/footer'

//importo componente main
import Main from '../components/main'
import Servicios from '../components/services'
import Register from '../components/register'
class Welcome extends Component {
  render() {
    return (
      <div>
        <Main />
        <Servicios />
        <Register />
        <Footer></Footer>
      </div>
    );
  }
}

export default Welcome;