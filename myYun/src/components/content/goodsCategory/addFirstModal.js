/* 添加一类商品分类弹框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
} from 'antd';

class AddGFirstModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {visible,handleOk,handleCancel} = this.props;
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

export default WrappedDynamicRule;