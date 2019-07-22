import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/goods/second';
import { mapGoods } from '../../../store/setMapStateProps'
import {
    Layout,
    Breadcrumb,
    Button,
    Table
} from 'antd';
import AddGSecondModal from "./addSecondModal";
const { Content } = Layout;
const { Column } = Table;

class Second extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        this.props.getGoodsSecond()
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

export default connect(mapGoods,actions)(Second);

