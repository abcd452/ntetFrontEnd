import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Profile extends Component {

  constructor(props){
    super(props);
    const {authenticated} = this.props;
    if(!authenticated.loggedIn){
      this.props.history.push('/');  
    }
  }

  render() {   
  return(<h1>HOLA MUNDO</h1>)
  }
}

const mapStateToProps = state => ({
    ...state,
    authenticated: state.authenticated
});


export default withRouter(connect(mapStateToProps)(Profile));