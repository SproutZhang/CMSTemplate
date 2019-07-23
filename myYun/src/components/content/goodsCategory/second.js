import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/goods/second';
import { mapGoods } from '../../../store/setMapStateProps'
import {
    Layout,
    Breadcrumb,
    Button,
    Table,
    Popconfirm
} from 'antd';
import AddGSecondModal from "./addSecondModal";
import EditGSecondModal from "./editSecondModal";
const { Content } = Layout;
const { Column } = Table;

class Second extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible1: false,
        }
    }
    componentDidMount() {
        this.props.getGoodsSecond()
    }

    showModal = ()=>{
        this.setState({visible: true})
    }
    showModal1 = (id)=>{
        this.setState({visible1: true})
        this.props.getGSecondInfo('?id='+id);
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
        this.props.delGoodsSecond('?id='+id)
    }

    render() {
        let { visible, visible1 } = this.state;
        const { goodsSecond } = this.props;
        let columns = goodsSecond.columns;
        let ColumnList = null;
        if(columns){
            ColumnList = columns.map((item,i)=>{
                if(item.dataIndex !== 'imgUrl'){
                    return (
                        <Column title={item.title} dataIndex={item.dataIndex} key={item.dataIndex} />
                    )
                }
            })
        }
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
                    <Button
                        type="primary"
                        style={{ marginBottom: 16 }}
                        onClick={ this.showModal }
                    >
                        新增分类
                    </Button>
                    <AddGSecondModal
                        visible={visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                    <EditGSecondModal
                        visible={visible1}
                        handleOk={this.handleOk1}
                        handleCancel={this.handleCancel1}
                    />
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        dataSource={goodsSecond.data} >
                        {ColumnList}
                        <Column
                            title="图片"
                            dataIndex="imgUrl"
                            key="imgUrl"
                            render={text => (
                                <img src={text} alt="" className='mw130'/>
                            )}
                        />
                        <Column
                            title="操作"
                            key="action"
                            render={text => (
                                <span>
                                    <Button
                                        type="primary"
                                        onClick={ this.showModal1.bind(this,text.id) }
                                    >修改</Button>
                                    &nbsp;&nbsp;
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

export default connect(mapGoods,actions)(Second);

