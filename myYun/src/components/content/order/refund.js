import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapOrders } from '../../../store/setMapStateProps';
import * as actions from '../../../store/actions/order/index';
import setStatus from '../../tools/index';
import {Layout, Breadcrumb, Table, Button} from 'antd';
const { Content } = Layout;
const { Column } = Table;

class Refund extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.getRefundOrders()
    }
    agree = (id)=>{
        this.props.agreeOrders('?id='+id)
    }
    refuse = (id)=>{
        this.props.refuseOrders('?id='+id)
    }

    render() {
        const { refundOrders } = this.props;
        let columns = refundOrders.columns;
        let ColumnList = null;
        let columnslist = [];
        if(columns){
            columns.forEach((item,i)=>{
                if(item.dataIndex === 'status'){
                    columnslist.push(
                        <Column
                            title={item.title}
                            dataIndex={item.dataIndex}
                            key={item.dataIndex}
                            render={text => {
                                return setStatus(text);
                            }}
                        />
                    )
                }else{
                    columnslist.push(
                        <Column
                            title={item.title}
                            dataIndex={item.dataIndex}
                            key={item.dataIndex}
                        />
                    )
                }
            })
            ColumnList = columnslist.map((item,i)=>{
                return (
                    item
                )
            })
        }
        return (
            <Content>
                <div className="title-box">
                    <Breadcrumb>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>退款处理</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>退款处理</h2>
                    <p>管理客户的退货请求，查看待处理的退货请求，可以进行拒绝和接受退货请求操作。</p>
                </div>
                <div className="content-box">
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        dataSource={refundOrders.data} >

                        {ColumnList}
                        <Column
                            title="操作"
                            key="action"
                            render={(text,record) =>{
                                return (
                                <span>
                                    <Button
                                        type="primary"
                                        onClick={this.agree.bind(this,text.id)}>同意</Button>
                                    &nbsp;&nbsp;
                                    <Button
                                        type="danger"
                                        onClick={this.refuse.bind(this,text.id)}>拒绝</Button>
                                </span>
                            )}
                            }
                        />
                    </Table>

                </div>
            </Content>
        );
    }
}

export default connect(mapOrders,actions)(Refund);

