import React, { Component } from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import * as actions from './store/actions';
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            psw:''
         }
    }

    change =(e)=>{
        let {username} = this.state;
        username = e.target.value;
        this.setState({ username  });  
    }
    change1 =(e)=>{
        let {psw} = this.state;
        psw = e.target.value;
        this.setState({ psw  });  
    }
    submit =()=>{
        let {username} = this.state;
        let {psw} = this.state;
        console.log(this.props);
        let params = {
            "user": username,
            "psw":psw
        }
        // let params = 'user='+username+'&psw='+psw;
        this.props.login('/login',params)
    }
    
    render() { 
        return ( 
            <div className="login">
                <div className="mengban">
                    <div className="formBox">
                    <Form className="login-form">
                    <Form.Item>
                
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="账号"
                        onChange={this.change}
                        />,
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        onChange={this.change1}
                        />,
                
                    </Form.Item>
            
                    <Form.Item>
                    
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submit}>
                        登录
                    </Button>
                
                    </Form.Item>
                </Form>
                    </div>    
                </div>
                
            </div>
         );
    }
}
 
export default connect(state=>state,actions)(Login);