/* 添加二类商品分类弹框 */

import React, { Component } from 'react';
import {
    Modal,
    Form,
    Input,
    Select,
    Upload,
    Icon,
    message
} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/goods/second';
import { mapGoods } from "../../../store/setMapStateProps";

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

class EditGSecondModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            imageUrl: ''
        }
    }
    normFile = e => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {id } = this.props.curSecondData[0];
                let cname = values.cname;
                let imgUrl = values.imgUrl[0].response.path;
                let pid = values.pid.key;
                let pname = values.pid.label;

                let params = '?id='+id+'&cname='+cname+'&imgUrl='+imgUrl+'&pid='+pid+'&pname='+pname;
                this.props.editGoodsSecond(params);

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
                this.props.curSecondData[0].imgUrl = imageUrl;
                this.setState({
                    imageUrl,
                    loading: false,
                })
            }


            );
        }
    };

    render() {

        const {visible,handleCancel,goodsFirst,curSecondData} = this.props;
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传图片</div>
            </div>
        );
        let optionList = null;
        if(JSON.stringify(goodsFirst) !== "{}"){
            let tdata = goodsFirst.data;
            optionList = tdata.map((item,i)=>{
                return (
                    <Option value={item.id} key={i}>{item.cname}</Option>
                )
            })
        }
        //设置默认显示数据
        let defaultName = '';
        let defaultPid = '';
        let defaultPName = '';
        let imageUrl = '';
        if(curSecondData.length > 0){
            defaultName = curSecondData[0].cname;
            defaultPid = curSecondData[0].pid;
            defaultPName = curSecondData[0].pname;
            imageUrl = curSecondData[0].imgUrl;
        }

        return (
            <Modal
                title="新增分类"
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
                    <Form.Item label="所属一级分类">
                        {getFieldDecorator('pid', {
                            initialValue: {key:defaultPid,label:defaultPName },
                            rules: [{ required: true, message: '请选择商品类别!' }],
                        })(
                            <Select
                                labelInValue
                            >
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
                </Form>
            </Modal>
        );
    }
}
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(EditGSecondModal);

export default connect(mapGoods,actions)(WrappedDynamicRule);