import React, { Component } from 'react';
import { Layout, Menu, Icon, } from 'antd';
import Logo from '../../assets/images/logo.svg'
import './sider.css'
const { Sider} = Layout;
const { SubMenu } = Menu;

class Siders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() { 
        return ( 
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo">
                    <img src={Logo} alt=""/>
                    <span>云商城</span>
                </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop" />
              
              <span>用户信息管理</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="desktop" />
              <span>商品信息管理</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>商品分类管理</span>
                </span>
              }
            >
              <Menu.Item key="3">一级分类</Menu.Item>
              <Menu.Item key="4">二级分类</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>订单管理</span>
                </span>
              }
            >
              <Menu.Item key="6">订单查询</Menu.Item>
              <Menu.Item key="8">订单配送</Menu.Item>
              <Menu.Item key="10">退款管理</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
         );
    }
}
 
export default Siders;