import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapOrders } from '../../../store/setMapStateProps'
import * as actions from '../../../store/actions/order/index';
import setStatus from '../../tools/index';
import {Layout, Breadcrumb, Table, Button,Radio} from 'antd';
const { Content } = Layout;
const { Column } = Table;

class Dispatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0
        }
    }
    componentDidMount() {
        let {status} = this.state;
        this.props.getDeliveryOrders('?status='+status)
    }
    statusChange =(e)=>{
        let s = e.target.value;
        this.props.getDeliveryOrders('?status='+s)

    }
    sendOrders = (id)=>{
        this.props.sendDeliveryOrders('?id='+id)

    }

    render() {
        const { deliveryOrders } = this.props;
        let columns = deliveryOrders.columns;
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
                        <Breadcrumb.Item>订单配送</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>订单配送</h2>
                    <p>管理订单的配送，查看待发货和配送中订单，可以对订单进行发货处理和确认送达处理。</p>
                    <Radio.Group
                        style={{position:'absolute',right:20,bottom:30}}
                        defaultValue="0"
                        onChange={this.statusChange}
                    >
                        <Radio.Button value="0">待发货</Radio.Button>
                        <Radio.Button value="1">已发货</Radio.Button>
                    </Radio.Group>
                </div>

                <div className="content-box">
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        dataSource={deliveryOrders.data} >

                        {ColumnList}
                        <Column
                            title="操作"
                            key="action"
                            render={text => {
                                if(text.status === 0){
                                    return (
                                        <span>
                                            <Button
                                                type="primary"
                                                onClick={this.sendOrders.bind(this,text.id)}
                                            >发货</Button>
                                        </span>
                                    )
                                }else if(text.status === 1){
                                    return(
                                        <span></span>
                                    )
                                }
                            }}
                        />
                    </Table>

                </div>
            </Content>
        );
    }
}

export default connect(mapOrders,actions)(Dispatch);

