import React, { Component } from 'react';
import {Layout, Breadcrumb, Table, Button} from 'antd';
import { connect } from "react-redux";
import * as actions from '../../../store/actions/goods/first';
import { mapGoods } from "../../../store/setMapStateProps";
import AddGFirstModal from './addFirstModal';

const { Content } = Layout;
const { Column } = Table;

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        this.props.getGoodsFirst()
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
        let { visible } = this.state;
        let columns = goodsFirst.columns;
        let ColumnList = null;
        if(columns){
            ColumnList = columns.map((item,i)=>{
                return (
                    <Column title={item.title} dataIndex={item.dataIndex} key={item.dataIndex} />
                )
            })
        }
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
                        dataSource={goodsFirst.data} >

                        {ColumnList}
                        <Column
                            title="操作"
                            key="action"
                            render={text => (
                                <span>
                                    <Button type="primary">修改</Button> &nbsp;&nbsp;
                                    <Button type="danger">删除</Button>
                                </span>
                            )}
                        />
                    </Table>

                </div>
            </Content>
        );
    }
}

export default connect(mapGoods,actions)(First);

