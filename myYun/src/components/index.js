import React, { Component } from 'react';
import { Layout, Menu, Icon,Breadcrumb } from 'antd';
import '../App.css';
import Siders from './sider/index';
import Headers from './header/index';
import Contents from './content/index';


class Home extends React.Component {
  state = {
    collapsed: false,
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Siders />     
        <Layout>
          <Headers />
          <Contents />
        </Layout>
      </Layout>
             
    );
  }
}


export default Home;
