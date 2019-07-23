/* 添加一类商品分类弹框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/goods/first';
import { mapGoods } from "../../../store/setMapStateProps";

class EditGFirstModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {id } = this.props;
                let params = '?id='+id+'&cname='+values.cname;
                this.props.editGoodsFirst(params)
                this.props.handleOk();
            }
        });

    }
    render() {
        const {visible,id,handleCancel,goodsFirst } = this.props;
        const { getFieldDecorator } = this.props.form;

        let data = goodsFirst.data;
        let defaultName = '';
        if(data){
            //通过id获取name
            let fdata = data.filter(item=> item.id == id)
            if(fdata.length>0){
                defaultName = fdata[0].cname;
            }
        }

        return (
            <Modal
                title="修改商品分类"
                okText="保存"
                cancelText="取消"
                visible={visible}
                onOk={this.handleSubmit}
                onCancel={handleCancel}
            >
                <Form>
                    <Form.Item label="分类名称">
                        {getFieldDecorator('cname', {
                            initialValue: defaultName,
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
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(EditGFirstModal);

export default connect(mapGoods,actions)(WrappedDynamicRule);