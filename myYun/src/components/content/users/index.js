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
        
        let {userData} = this.props;
        let columns1 = userData.columns;
        if(columns1){
            columns1.push({
                title: '操作',
                key: 'action',
                render: (text, record) => (
                <span>
                    <a href="javascript:;">编辑</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">删除</a>
                </span>
                ),
            })
        }
        
        
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户信息管理</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 , height: '100vh'}}>
                    <Table columns={columns1} dataSource={userData.data} />


                </div>
            </Content>
         );
    }
}
 
export default connect(mapUser,actions)(User);

