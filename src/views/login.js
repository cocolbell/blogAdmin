import React from 'react'
import { Form,  Input, Button } from 'antd';
const FormItem = Form.Item;

import '../css/login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        };

        this.nameChange = this.nameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.fetchLogin = this.fetchLogin.bind(this);
    }
    
    nameChange (e) {
        this.setState({username: e.target.value});
    }

    passwordChange (e) {
        this.setState({password: e.target.value});
    }

    fetchLogin (e) {
        let data = {
            name : this.state.username,
            password : this.state.password
        }
        data = JSON.stringify(data);
        fetch('/api/login',{
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
            body: data
        }).then(res =>{
                console.log(res.json())
                if(res.status == 200 && res.body.result == 'success'){
                    
                    message.success('登录成功', 10);
                }
                else {
                    console.log(res.body.reason);
                }
            }
        ).catch(err =>{
            console.log("Fetch错误:" + err);
        });
        e.stopPropagation();
    }

    render () {
        return (
            <div className="login">
                <div className="loginForm">
                    <Form className="login-form">
                        <FormItem>
                            <Input placeholder="请输入用户名" value={this.state.username} onChange={this.nameChange}/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" type="password" value={this.state.password} onChange={this.passwordChange}/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" 
                                htmlType="submit" 
                                className="login-form-button" 
                                onClick={this.fetchLogin}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}