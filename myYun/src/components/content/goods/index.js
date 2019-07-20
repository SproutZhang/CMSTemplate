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
            <Content>
                <div className="title-box">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>商品信息管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>商品列表</h2>
                    <p>仓库商品信息展示，可以进行新增商品，编辑商品，商品入库，商品出库操作</p>
                </div>

                <div className="content-box">
                    <div>Goods</div>
                </div>
            </Content>

        );
    }
}

export default Goods;

