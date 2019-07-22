import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;


class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Content>
                <div className="title-box">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>订单查询</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>订单查询</h2>
                    <p>展示全部订单信息，组合查询订单信息</p>
                </div>
                <div className="content-box">
                    <div>订单查询</div>
                </div>
            </Content>

        );
    }
}

export default Query;

