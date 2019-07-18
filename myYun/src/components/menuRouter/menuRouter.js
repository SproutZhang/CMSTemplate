import routers from './routers';
import { Route } from 'react-router-dom';
import React from "react";


function menuRoute() {
    return routers.map((item,i)=>{
        return (
            <Route path={ item.path } component={ item.component } key={i}></Route>
        )
    })
}

export default menuRoute()