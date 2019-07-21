import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps';
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        this.props.getUserInfo('/getUsers')

    }
    render() { 
        
        const {userData} = this.props;
        let columns1 = userData.columns;
        // if(columns1){
        //     columns1.push({
        //         title: '操作',
        //         key: 'action',
        //         render: (text, record) => (
        //         <span>
        //             <a href="javascript:;">编辑</a>
        //             <Divider type="vertical" />
        //             <a href="javascript:;">删除</a>
        //         </span>
        //         ),
        //     })
        // }
        
        
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
                        columns={columns1}
                        dataSource={userData.data} />


                </div>
            </Content>
         );
    }
}
 
export default connect(mapUser,actions)(User);

