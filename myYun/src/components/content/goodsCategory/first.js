import React, { Component } from 'react';
import {Layout, Breadcrumb, Table, Button} from 'antd';
import { connect } from "react-redux";
import * as actions from '../../../store/actions';
import { mapGoods } from "../../../store/setMapStateProps";
import apiUrl from "../../../api/urlConfig";
import AddGFirstModal from './addFirstModal';

const { Content } = Layout;

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        let url = apiUrl.goods.category.first.get;
        this.props.getGoodsFirst(url)
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
        const { goodsFirst } = this.props;
        let columns1 = goodsFirst.columns;
        let { visible } = this.state;
        // if(columns1){
        //     columns1 = goodsFirst.columns;
        // }
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
                    <Button
                        type="primary"
                        style={{ marginBottom: 16 }}
                        onClick={ this.showModal }
                    >
                        新增分类
                    </Button>
                    <AddGFirstModal
                        visible={visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        columns={columns1}
                        dataSource={goodsFirst.data} />

                </div>
            </Content>
        );
    }
}

export default connect(mapGoods,actions)(First);

