/* 添加商品的弹出框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
    Select,
    Upload,
    Button,
    InputNumber,
    Icon
} from 'antd';
const { Option } = Select;

class AddGoodsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
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
                title="新增商品"
                okText="保存"
                cancelText="取消"
                visible={visible}
                onOk={this.handleSubmit}
                onCancel={handleCancel}
            >
                <Form>
                    <Form.Item label="商品名称">
                        {getFieldDecorator('商品名称', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入商品名称',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="商品类别">
                        {getFieldDecorator('商品类别', {
                            rules: [{ required: true, message: '请选择商品类别!' }],
                        })(
                            <Select>
                                <Option value="china">零食</Option>
                                <Option value="usa">水果</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="图片">
                        {getFieldDecorator('图片', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> 上传图片
                                </Button>
                            </Upload>,
                        )}
                    </Form.Item>
                    <Form.Item label="现价">
                        {getFieldDecorator('input-number',
                            {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入商品现价',
                                    },
                                ],
                                initialValue: ''
                            })(<InputNumber />)}
                    </Form.Item>
                    <Form.Item label="原价">
                        {getFieldDecorator('input-number',
                            {
                                initialValue: ''
                            })(<InputNumber />)}
                    </Form.Item>
                    <Form.Item label="规格">
                        {getFieldDecorator('规格', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入规格',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="原产地">
                        {getFieldDecorator('原产地', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入原产地',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(AddGoodsModal);

export default WrappedDynamicRule;