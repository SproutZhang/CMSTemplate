import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;

class Dispatch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
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
                    <div>订单配送</div>

                </div>
            </Content>
        );
    }
}

export default Dispatch;

