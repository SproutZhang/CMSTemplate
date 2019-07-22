import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;


class Refund extends Component {
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
                        <Breadcrumb.Item>退款处理</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>退款处理</h2>
                    <p>管理客户的退货请求，查看待处理的退货请求，可以进行拒绝和接受退货请求操作。</p>
                </div>
                <div className="content-box">
                    <div>退款处理</div>

                </div>
            </Content>
        );
    }
}

export default Refund;

