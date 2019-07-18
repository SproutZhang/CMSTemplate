import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../../assets/images/logo.svg';
import './sider.css';
import Menus from './menus';
const { Sider} = Layout;

class Siders extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return ( 
            <Sider>
                <div className="logo">
                    <img src={Logo} alt=""/>
                    <span>云商城</span>
                </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {Menus}
          </Menu>
        </Sider>
         );
    }
}
 
export default Siders;