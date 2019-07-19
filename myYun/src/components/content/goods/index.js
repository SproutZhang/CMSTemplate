import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;


class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <div style={{background: "#fff",width:'100%'}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>商品信息管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>用户列表</h2>
                    <p>用户信息展示，可以进行修改用户个人信息，修改用户密码操作</p>
                </div>

                <div style={{ padding: 24, background: '#fff', minHeight: 360 , height: '100vh'}}>
                    <div>Goods</div>
                </div>
            </Content>

        );
    }
}

export default Goods;

