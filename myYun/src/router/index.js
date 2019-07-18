import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Login from '../login/login';
import App from '../components/App';
import { connect } from 'react-redux';
import { mapUser } from '../store/setMapStateProps'


class RouterConfig extends React.Component {
    render() {
        let {isLogin} = this.props;
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={ Login }></Route>
                    <Route path='/' render={(props)=>{
                        if(isLogin){
                            return (<App />)
                        }else{
                            return (<Redirect to="/login"/>)
                        }
                    }}></Route>
                </Switch>
            </Router>
        );
    }
}

export default connect(mapUser)(RouterConfig);
