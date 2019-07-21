import React, { Component } from 'react';
import { Layout, Breadcrumb} from 'antd';
import AddGoods from './panel/add';
import AddGoodsModal from './panel/addGoodsModal'
import './index.css'
const { Content } = Layout;


class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showModal = ()=>{
        this.setState({visible: true})
    }
    handleOk = ()=>{
        this.setState({visible: false})
    }
    handleCancel  = ()=>{
        this.setState({visible: false})
    }

    render() {
        let { visible } = this.state;
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
                    <AddGoods
                        showModal={ this.showModal }
                    />
                    <AddGoodsModal
                        visible={visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                </div>
            </Content>

        );
    }
}

export default Goods;

