import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
// import routeConfig from './router_config';
import Login from '../login/login';
import App from '../components/App';
import { connect } from 'react-redux';
import { mapUser } from '../store/setMapStateProps'

/*配置变量有点问题，暂时先写为固定*/
/*
function renderRoutes(routeConfig) {
    return routeConfig.map((item,i)=>{
        return (
            <Route
                path=item.path
                exact={item.exact?item.exact:false}
                render={(props) =>{
                    if(login){
                        return (< {item.component}/>)
                    }else{
                        return (<Redirect to="/login" />)
                    }
                }}
    />
        )
    })
}*/

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
