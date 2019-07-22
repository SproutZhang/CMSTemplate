import React, { Component } from 'react';
import {Table, Button} from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/user/index';
import { mapUser } from '../../../store/setMapStateProps';
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;
const { Column } = Table;


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        this.props.getUserInfo()

    }
    render() { 
        
        const {userData} = this.props;
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
                                    <Button type="primary">修改信息</Button> &nbsp;&nbsp;
                                    <Button type="danger">删除用户</Button>
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

