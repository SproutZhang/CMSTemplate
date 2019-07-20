import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;

class First extends Component {
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
                        <Breadcrumb.Item>商品一级分类</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>一级商品分类</h2>
                    <p>一级商品分类展示，可以进行新增商品分类，修改商品分类，删除商品分类操作</p>
                </div>
                <div className="content-box">
                    <div>一级分类</div>

                </div>
            </Content>
        );
    }
}

export default First;

