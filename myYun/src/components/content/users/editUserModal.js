/* 修改用户信息弹框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
    InputNumber,
    Select
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/user/index';
import { mapUser } from "../../../store/setMapStateProps";

const { Option } = Select;

class EditUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {id } = this.props.curUserData[0];
                let name = values.name;
                let age = values.age;
                let address = values.address;
                let tel = values.tel;
                console.log(values);
                let params = '?id='+id+'&name='+name+'&age='+age+'&address='+address+'&tel='+tel;
                console.log(params);
                this.props.editUser(params);
                this.props.handleOk();
            }
        });

    }
    render() {
        const {visible,handleCancel,curUserData} = this.props;
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        //设置默认显示数据
        let defaultName = '';
        let defaultAge = '';
        let defaultAddress = '';
        let defaultTel = '';
        if(curUserData.length > 0){
            defaultName = curUserData[0].name;
            defaultAge = curUserData[0].age;
            defaultAddress = curUserData[0].address;
            defaultTel = curUserData[0].tel;
        }

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
                    <Form.Item label="姓名">
                        {getFieldDecorator('name', {
                            initialValue: defaultName,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入姓名',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="年龄">
                        {getFieldDecorator('age', {
                            initialValue: defaultAge,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入年龄',
                                },
                            ],
                        })(<InputNumber/>)}
                    </Form.Item>
                    <Form.Item label="住址">
                        {getFieldDecorator('address', {
                            initialValue: defaultAddress,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入住址',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="手机号">
                        {getFieldDecorator('tel', {
                            initialValue: defaultTel,
                            rules: [{ required: true, message: '请输入手机号!' }],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(EditUserModal);

export default connect(mapUser,actions)(WrappedDynamicRule);