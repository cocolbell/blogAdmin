'use strict'
import React from 'react';
import { render } from 'react-dom';

const myFetch = new _fetch();

import { Table, Divider, Button } from 'antd';


const columns = [
    {
        title: '序号',
        key: 'articId',
        dataIndex: 'articId'
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
                <Button type="danger">删除</Button>
                <Divider type="vertical" />
                <Button type="primary">编辑</Button>
            </span>
        )
    }
];


export default class ArticList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    tableDataInit (arr) {
        arr.forEach((item, i) => {
            item["key"] = i;
        });
        return arr;
    }
    componentWillMount () {
        let _this = this;
        myFetch.get("/api/article/getAllArticles")
            .send()
            .then(data => {
                data.result == 'success' && _this.setState({
                    data :  _this.tableDataInit(data.message)
                });
            })
            .catch(err => {
                console.log(err)
            })
    } 
    render () {
        return (
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                />
        )
    }
}