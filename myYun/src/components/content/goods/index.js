import React, { Component } from 'react';
import { Layout, Breadcrumb,Row} from 'antd';
import AddGoods from './panel/add';
import AddGoodsModal from './panel/addGoodsModal';
import EditGoodsModal from './panel/editGoodsModal';
import GoodsCard from './panel/goodsInfo';
import { connect } from "react-redux";
import * as actions from '../../../store/actions/goods/index';
import { mapGoods } from "../../../store/setMapStateProps";
import './index.css'
const { Content } = Layout;


class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible1: false
        }
    }
    componentDidMount() {
        this.props.getGoodsAll()
    }
    //显示编辑弹框
    showModal1 = (id)=>{
        console.log(id);
        this.setState({visible1: true})
        this.props.getGoodsInfo('?id='+id);
    }
    showModal = ()=>{
        this.setState({visible: true})
    }
    handleOk = ()=>{
        this.setState({visible: false})
    }
    handleOk1 = ()=>{
        this.setState({visible1: false})
    }
    handleCancel  = ()=>{
        this.setState({visible: false})
    }
    handleCancel1  = ()=>{
        this.setState({visible1: false})
    }

    render() {
        let { visible, visible1 } = this.state;
        const {goodsInfo} = this.props;
        let gcCard = null;
        if(goodsInfo.length>0){
            gcCard = goodsInfo.map(item=>{
                return (
                    <GoodsCard
                        showModal={this.showModal1}
                        key={item.id}
                        data={item}
                    />
                )
            })
        }
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
                    <Row gutter={16}>
                        <AddGoods
                            showModal={ this.showModal }
                        />
                        { gcCard }
                        {/*<GoodsCard />*/}
                    </Row>

                    <AddGoodsModal
                        visible={visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                    <EditGoodsModal
                        visible={visible1}
                        handleOk={this.handleOk1}
                        handleCancel={this.handleCancel1}
                    />
                </div>
            </Content>

        );
    }
}

export default connect(mapGoods,actions)(Goods);

