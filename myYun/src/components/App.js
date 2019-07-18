import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import Siders from './sider/index';
import Headers from './header/index';
import menuRouter from './menuRouter/menuRouter';



class App extends React.Component {

  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Siders />
          <Layout>
              <Headers />
              <>
                  { menuRouter }
              </>
          </Layout>
        </Layout>

    );
  }
}


export default App;
