/* 修改商品的弹出框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
    Select,
    Upload,
    InputNumber,
    Icon, message
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/goods/index';
import { mapGoods } from "../../../../store/setMapStateProps";
const { Option } = Select;

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('只能上传JPG格式的文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片必须小于2MB!');
    }
    return isJPG && isLt2M;
}
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class EditGoodsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { id } = this.props.curGoods[0];
                let gname = values.gname;
                let imgUrl = values.imgUrl[0].response.path;
                let pid = values.pid.key;
                let pname = values.pid.label;
                let nowPrice = values.nowPrice;
                let oldPrice = values.oldPrice;
                let origin = values.origin;
                let specs = values.specs;

                let params = '?id='+id+'&gname='+gname+'&imgUrl='+imgUrl+'&pid='+pid+'&pname='+pname+'&nowPrice='+nowPrice+'&oldPrice='+oldPrice+'&origin='+origin+'&specs='+specs;
                this.props.editGoods(params);

                this.props.handleOk();
            }
        });
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>{
                this.props.curGoods[0].imgUrl = imageUrl;
                    this.setState({
                        imageUrl,
                        loading: false,
                    })
                }

            );
        }
    };

    render() {
        const { visible, handleCancel, goodsSecond, curGoods } = this.props;
        const { getFieldDecorator } = this.props.form;

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传图片</div>
            </div>
        );
        let optionList = null;
        if(JSON.stringify(goodsSecond) !== "{}"){
            let tdata = goodsSecond.data;
            optionList = tdata.map((item,i)=>{
                return (
                    <Option value={item.id} key={i}>{item.cname}</Option>
                )
            })
        }
        //设置默认显示数据
        let defaultGname = '';
        let defaultPid = '';
        let defaultPName = '';
        let defaultNowPrice = '';
        let defaultOldPrice = '';
        let defaultOrigin = '';
        let defaultSpecs = '';
        let imageUrl = '';
        if(curGoods.length > 0){
            defaultGname = curGoods[0].gname;
            defaultPid = curGoods[0].pid;
            defaultPName = curGoods[0].pname;
            defaultNowPrice = curGoods[0].nowPrice;
            defaultOldPrice = curGoods[0].oldPrice;
            defaultOrigin = curGoods[0].origin;
            defaultSpecs = curGoods[0].specs;
            imageUrl = curGoods[0].imgUrl;
        }
        return (
            <Modal
                title="修改商品"
                okText="保存"
                cancelText="取消"
                visible={visible}
                onOk={this.handleSubmit}
                onCancel={handleCancel}
            >
                <Form>
                    <Form.Item label="商品名称">
                        {getFieldDecorator('gname', {
                            initialValue: defaultGname,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入商品名称',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="商品类别">
                        {getFieldDecorator('pid', {
                            initialValue: {key:defaultPid,label:defaultPName },
                            rules: [{ required: true, message: '请选择商品类别!' }],
                        })(
                            <Select labelInValue>
                                {optionList}
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="图片">
                        {getFieldDecorator('imgUrl', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            rules: [{ required: true, message: '请上传图片!' }],
                        })(
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="/upload"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt='商品' className='mw230'/> : uploadButton}
                            </Upload>,
                        )}
                    </Form.Item>
                    <Form.Item label="现价">
                        {getFieldDecorator('nowPrice',
                            {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入商品现价',
                                    },
                                ],
                                initialValue: defaultNowPrice
                            })(<InputNumber />)}
                    </Form.Item>
                    <Form.Item label="原价">
                        {getFieldDecorator('oldPrice',
                            {
                                initialValue: defaultOldPrice
                            })(<InputNumber />)}
                    </Form.Item>
                    <Form.Item label="规格">
                        {getFieldDecorator('specs', {
                            initialValue: defaultOrigin,
                            rules: [
                                {
                                    required: true,
                                    message: '请输入规格',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="原产地">
                        {getFieldDecorator('origin', {
                            initialValue: defaultSpecs,
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
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(EditGoodsModal);

export default connect(mapGoods,actions)(WrappedDynamicRule);;