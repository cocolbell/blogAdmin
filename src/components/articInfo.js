'use strict'
import React from 'react';
import { render } from 'react-dom';

import { Form,  Input, Button, Mention } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

import '../css/articInfo.css'

export default class ArticInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title : "",
            contentPrev : "",
            tags : ""
        }
    }
    render () {
        return (
            <div className="articInfo">
                <Form>
                    <FormItem>
                        <Input placeholder="请输入文章标题" value={this.state.title}/>
                    </FormItem>
                    <FormItem>
                        <TextArea placeholder="请输入预览内容" rows={4} value={this.state.contentPrev}/>
                    </FormItem>
                    <FormItem>
                        <Mention
                            style={{ width: '100%' }}
                            placeholder="请输入标签"
                            suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
                        />
                    </FormItem>
                </Form>
            </div>
        )
    }
}