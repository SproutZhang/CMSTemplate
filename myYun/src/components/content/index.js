import React, { Component } from 'react';
import { Layout, Breadcrumb} from 'antd';
import User from './contents/users'
const { Content } = Layout;

class Contents extends Component {
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
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 , height: '100vh'}}>
                <User />
            </div>
          </Content>
         );
    }
}
 
export default Contents;
