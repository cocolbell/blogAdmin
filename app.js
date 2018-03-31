'use strict'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch, message } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Login from './src/views/login'
import Sidebar from './src/components/sidebar'  
import articList from './src/views/articList'
import articEdit from './src/views/articEdit'

import './src/css/app.css';

const element = (
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
                                <Route path="/articEdit" component={articEdit}></Route>
                                <Route path="/articList" component={articList}></Route>
                            </Switch>
                    </Content>
                </Layout>
                </div> 
            )} />               
        </Switch>
    </BrowserRouter>        
)

render( 
    element,
    document.getElementById('app')
);