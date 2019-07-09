import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import Siders from './sider/index';
import Headers from './header/index';
import Contents from './content/index';


class App extends React.Component {

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


export default App;
