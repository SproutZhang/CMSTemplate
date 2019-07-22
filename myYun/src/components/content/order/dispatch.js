import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapOrders } from '../../../store/setMapStateProps'
import * as actions from '../../../store/actions/order/index';
import {Layout, Breadcrumb, Table, Button} from 'antd';
const { Content } = Layout;
const { Column } = Table;

class Dispatch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.getDeliveryOrders('?status=0')
    }

    render() {
        const { deliveryOrders } = this.props;
        let columns = deliveryOrders.columns;
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
                        <Breadcrumb.Item>订单配送</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>订单配送</h2>
                    <p>管理订单的配送，查看待发货和配送中订单，可以对订单进行发货处理和确认送达处理。</p>
                </div>
                <div className="content-box">
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        dataSource={deliveryOrders.data} >

                        {ColumnList}
                        <Column
                            title="操作"
                            key="status"
                            render={text => (
                                <span>
                                    <Button type="primary">发货</Button>
                                </span>
                            )}
                        />
                    </Table>

                </div>
            </Content>
        );
    }
}

export default connect(mapOrders,actions)(Dispatch);

