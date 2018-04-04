'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateToken } from '../actions/token'

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.isLogin,
        token: state.token
    }   
}

let authorize = ({ component: Component, ...rest }) => {
    console.log("connect的组件每点击一次路由就会执行一次，原理是什么？")
    return (
        <Route
            {...rest}
            render = { () => {
                return rest.isLogin ? (
                    <Component/>
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }}
        />
    )
}

export default connect(mapStateToProps)(authorize)