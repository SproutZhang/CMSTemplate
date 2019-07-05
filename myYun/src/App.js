import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './login'
import Home from './components/index';
import * as actions from './store/actions';
import { connect } from 'react-redux'





class App extends React.Component {
  state = {
    collapsed: false,
  };
  render() {
    let {islogin} = this.props;   
    return (
      <div style = { { height: '100vh'}}>
        <Switch>
            <Route path='/login' component={ (props)=> <Login props={props} />}></Route>
            <Route path='/' render={(props)=>{
              if(islogin){
                return (<Home />)
              }else{
                return (<Redirect to="/login"/>)
              }
            }}></Route>
        </Switch>
      </div>      
    );
  }
}


export default connect(state => state,actions)(App);
