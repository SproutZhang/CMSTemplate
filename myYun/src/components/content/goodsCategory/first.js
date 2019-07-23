import React, { Component } from 'react';
import {Layout, Breadcrumb, Table, Button,Popconfirm} from 'antd';
import { connect } from "react-redux";
import * as actions from '../../../store/actions/goods/first';
import { mapGoods } from "../../../store/setMapStateProps";
import AddGFirstModal from './addFirstModal';
import EditGFirstModal from './editFirstModal';

const { Content } = Layout;
const { Column } = Table;

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible1: false,
        }
    }
    componentDidMount() {
        this.props.getGoodsFirst()
    }

    //显示添加弹框
    showModal = ()=>{
        this.setState({visible: true})

    }
    //显示编辑弹框
    showModal1 = (id)=>{
        this.setState({visible1: true})
        this.props.getGFirstCname('?id='+id);
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
    //删除
    confirm = (id)=>{
        this.props.delGoodsFirst('?id='+id)
    }
    render() {
        const { goodsFirst } = this.props;
        let { visible, visible1 } = this.state;
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
                    <EditGFirstModal
                        visible={visible1}
                        handleOk={this.handleOk1}
                        handleCancel={this.handleCancel1}
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
                                    <Button
                                        type="primary"
                                        onClick={ this.showModal1.bind(this,text.id) }
                                    >修改</Button> &nbsp;&nbsp;
                                    <Popconfirm
                                        title="删除后数据不可恢复，确认删除吗?"
                                        onConfirm={this.confirm.bind(this,text.id)}
                                        okText="确认"
                                        cancelText="取消"
                                    >
                                    <Button type="danger">删除</Button>
                                  </Popconfirm>

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

