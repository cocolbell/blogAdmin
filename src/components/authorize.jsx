'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Route, Redirect } from 'react-router-dom';


export default ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render = { renderProps => {
                return true ? (
                    <Component {...renderProps}/>
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }}
        />
    )
}