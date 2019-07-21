import React, { Component } from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { mapUser } from '../store/setMapStateProps';
import Logo from '../assets/images/logo.svg';

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values)
            }
        });
    };
    componentDidMount(){
        this.props.getCookie()
        let { isLogin, history } = this.props;
        if(isLogin){
            history.push('/')
        }
    }
    componentDidUpdate(){
        let { isLogin, history } = this.props;
        if(isLogin){
            history.push('/')
        }
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return ( 
            <div className="login">
                <div className="mengban">
                    <div className="logo-box">
                        <img src={ Logo } alt=""/>
                        <h2>云商城后台管理系统</h2>
                    </div>
                    <div className="formBox">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('user', {
                                    rules: [{ required: true, message: '请填写用户名!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('psw', {
                                    rules: [{ required: true, message: '请填写密码!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>

                                {/*<a className="login-form-forgot" href="">*/}
                                    {/*Forgot password*/}
                                {/*</a>*/}
                                <Button type="primary" htmlType="submit" className="login-form-button">
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
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

// export default connect(state=>state,actions)(WrappedNormalLoginForm);
export default connect(mapUser,actions)(WrappedNormalLoginForm);