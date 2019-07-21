/* 添加一类商品分类弹框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapGoods } from "../../../store/setMapStateProps";

class AddGFirstModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let params = '?cname='+values.cname;
                this.props.addGoodsFirst(params);
                this.props.handleOk();
            }
        });

    }
    render() {
        const {visible,handleCancel} = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="新增商品分类"
                okText="保存"
                cancelText="取消"
                visible={visible}
                onOk={this.handleSubmit}
                onCancel={handleCancel}
            >
                <Form>
                    <Form.Item label="分类名称">
                        {getFieldDecorator('cname', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入商品名称',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(AddGFirstModal);

export default connect(mapGoods,actions)(WrappedDynamicRule);