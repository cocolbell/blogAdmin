'use strict'
import React from 'react';
import { render } from 'react-dom';

import { Table, Divider } from 'antd';


const columns = [
    {
        title: '序号',
        key: 'id',
        dataIndex: 'id'
    }, {
        title: '标题',
        key: 'title',
        dataIndex: 'title',
        render: text => <a href="#">{text}</a>,
    }, {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        render: (text) => (
            <span>
                <a href="#">删除</a>
                <Divider type="vertical" />
                <a href="#">编辑</a>
            </span>
        )
    }
];

const data = [{
    key: '1',
    title: 'Web 缓存',
    id: 32,
}, {
    key: '2',
    title: '666',
    id: 42,
}, {
    key: '3',
    title: '一说简单的歌',
    id: 32,
}];


export default class ArticList extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
                <Table
                    columns={columns}
                    dataSource={data}
                />
        )
    }
}