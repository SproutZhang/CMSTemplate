import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapOrders } from '../../../store/setMapStateProps';
import * as actions from '../../../store/actions/order/index';
import {Layout, Breadcrumb, Table} from 'antd';
const { Content } = Layout;
const { Column } = Table;


class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.getAllOrders()
    }

    render() {
        const { allOrders } = this.props;
        let columns = allOrders.columns;
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
                        <Breadcrumb.Item>订单查询</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>订单查询</h2>
                    <p>展示全部订单信息，组合查询订单信息</p>
                </div>
                <div className="content-box">
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        dataSource={allOrders.data} >

                        {ColumnList}
                    </Table>
                </div>
            </Content>

        );
    }
}

export default connect(mapOrders,actions)(Query);

