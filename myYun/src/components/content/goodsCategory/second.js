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
            <Content>
                <div className="title-box">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>二级商品分类</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>二级商品分类</h2>
                    <p>二级商品分类展示，可以进行新增分类，修改分类，删除分类操作。</p>
                </div>
                <div className="content-box">
                    <div>二级分类</div>
                </div>
            </Content>
        );
    }
}

export default Second;

