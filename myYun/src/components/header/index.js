import React, { Component } from 'react';
import { Layout, Icon, Dropdown, Menu } from 'antd';
import './header.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import { mapUser } from '../../store/setMapStateProps'
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
        let menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                  退出
                </a>
              </Menu.Item>

            </Menu>
          );
        let { user } = this.props;
        console.log(this.props);
        return ( 
            <Header style={{ background: '#fff', padding: 0, position: "relative" }}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />
                <div className='user-box'>
                    <div className="user-ava">
                        <span>{user.name}</span>
                        <Dropdown overlay={menu}>
                            <img src={user.avatar} type="down"/>
                        </Dropdown>
                    </div>
                </div>
            </Header>
         );
    }
}
 
export default connect(mapUser,actions)(Headers);

