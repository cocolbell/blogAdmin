'use strict'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Authorize from './src/components/authorize.jsx'
import { Provider, connect } from 'react-redux'
import { store } from './src/store/store'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import './src/until/refetch'

import Login from './src/views/login.jsx'
import Sidebar from './src/components/sidebar.jsx'  
import articList from './src/views/articList.jsx'
import articEdit from './src/views/articEdit.jsx'

import './src/css/app.scss';

const element = (
    <Provider store={store}>
        <BrowserRouter>        
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" render={() => (
                    <div className="container">
                    <Layout style={{ padding: '25px 0', background: '#fff' }}>
                        <Sider style={{ background: '#fff' }}>
                            <Sidebar></Sidebar>
                        </Sider>
                        <Content style={{ padding: '0 30px' }}>
                                <Switch>
                                    <Authorize path='/index/articEdit' component={articEdit}></Authorize>
                                    <Authorize path='/index/articList' component={articList}></Authorize>
                                </Switch>
                        </Content>
                    </Layout>
                    </div> 
                )} />               
            </Switch>
        </BrowserRouter> 
    </Provider>       
)

render( 
    element,
    document.getElementById('app')
);