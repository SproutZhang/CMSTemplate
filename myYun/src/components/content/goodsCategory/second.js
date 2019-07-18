import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;

class Second extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>商品二级分类</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 , height: '100vh'}}>
                    <div>二级分类</div>
                </div>
            </Content>
        );
    }
}

export default Second;
