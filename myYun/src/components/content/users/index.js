import React, { Component } from 'react';
import {Table, Button, Popconfirm} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/user/index';
import { mapUser } from '../../../store/setMapStateProps';
import EditUser from './editUserModal'
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;
const { Column } = Table;


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    componentDidMount(){
        this.props.getUserInfo()

    }
    handleOk = ()=>{
        this.setState({visible: false})
    }
    //显示编辑弹框
    showModal = (id)=>{
        this.setState({visible: true})
        this.props.getThisUser('?id='+id);
    }
    handleCancel  = ()=>{
        this.setState({visible: false})
    }
    //删除
    confirm = (id)=>{
        this.props.delUser('?id='+id)
    }
    render() { 
        
        const {userData} = this.props;
        let { visible } = this.state;
        let columns = userData.columns;
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
                        <Breadcrumb.Item>用户信息管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>用户列表</h2>
                    <p>用户信息展示，可以进行修改用户个人信息，修改用户密码操作</p>
                </div>
                <div className="content-box">
                    <EditUser
                        visible={visible}
                        handleOk={this.handleOk}
                        handleCancel={this.handleCancel}
                    />
                    <Table
                        bordered
                        style={{background:"#fff"}}
                        dataSource={userData.data}>

                        {ColumnList}
                        <Column
                            title="操作"
                            key="action"
                            render={text => (
                                <span>
                                    <Button
                                        type="primary"
                                        onClick={ this.showModal.bind(this,text.id) }
                                    >修改</Button> &nbsp;&nbsp;
                                    <Popconfirm
                                        title="删除后数据不可恢复，确认删除吗?"
                                        onConfirm={this.confirm.bind(this,text.id)}
                                        okText="确认"
                                        cancelText="取消"
                                    >
                                    <Button type="danger">删除</Button>
                                  </Popconfirm>

                                </span>
                            )}
                        />
                    </Table>


                </div>
            </Content>
         );
    }
}
 
export default connect(mapUser,actions)(User);

