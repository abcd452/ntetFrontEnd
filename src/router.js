import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import Welcome from './routes/welcome'
import Signin from './routes/signin'
import NavbarBlack from './components/navbarBlack'

class Routes extends Component {

    constructor(props){
      super(props);
      this.state = {
        showLoginForm: false
      }
      this.onPressShow = this.onPressShow.bind(this);
      this.onPressClose = this.onPressClose.bind(this);  
    }

    onPressShow(event){
      this.setState({
        showLoginForm:true
      })       
    }

    onPressClose(event){
      this.setState({
        showLoginForm:false
      })   
    }

    render(){
        return(
            <Router>
                <div>
                <NavbarBlack doShow={this.state.showLoginForm} enventOnPress={this.onPressShow} enventOnPressAdd={this.onPressClose}/>
                  <Switch>
                    <Route path="/" exact={true} component={Welcome} />
                    <Route path="/signin/user" render={(props) => <Signin role="Usuario" enventOnPress={this.onPressShow} />}/>
                    <Route path="/signin/driver" render={ (props) => <Signin role="Conductor" enventOnPress={this.onPressShow}/>}/>
                    <Route component={NoMatch} />
                  </Switch>
                </div>
            </Router>
        );
    }
}


function NoMatch({ location }) {
    return (
      <div>
        <h3>
          No se encuentra la ruta <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }  

export default Routes;