'use strict'
import React from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className="sidebar">
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>文章管理</span></span>}>
                        <Menu.Item key="1"><NavLink to="/index/articEdit">文章编辑</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to="/index/articList">文章管理</NavLink></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">评论管理</Menu.Item>
                    <Menu.Item key="4">标签管理</Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>页面监控</span></span>}>
                        <Menu.Item key="5">性能监控</Menu.Item>
                        <Menu.Item key="6">错误监控</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}