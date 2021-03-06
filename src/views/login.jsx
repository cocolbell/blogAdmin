import React from 'react'
import { Form,  Input, Button } from 'antd'
const FormItem = Form.Item;

import { connect } from 'react-redux'
import { updateToken } from '../actions/token'

const myFetch = new _fetch();

import '../css/login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)
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
        const _this = this;
        let data = {
            name : this.state.username,
            password : this.state.password
        }
        myFetch.post('/api/login')
            .sendJson(data)
            .then(data => {
                if (data.result == 'success') {
                    _this.props.history.push('/');
                    _this.props.update_token(data.message)                    
                }
            }).catch(err => {

            })
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

const mapStateToProps = (state, ownProps) => ({
    isLogin: state.isLogin,
    token: state.token
})

const mapDispatchToProps = (dispatch) => ({
    update_token: (data) => dispatch(updateToken(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)