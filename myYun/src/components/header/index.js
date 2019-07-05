import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
const { Header } = Layout;

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() { 
        return ( 
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />
            </Header>
         );
    }
}
 
export default Headers;

