'use strict'
import React from 'react';
import { render } from 'react-dom';

import { Form,  Input, Button, Mention } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

import '../css/articInfo.scss'

export default class ArticInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        let {title, contentPrev, tags} = this.props.info;
        let {titleChange, prevChange, tagsChange} = this.props.method;
        return (
            <div className="articInfo">
                <Form>
                    <FormItem>
                        <Input placeholder="请输入文章标题" value={title} onChange={titleChange}/>
                    </FormItem>
                    <FormItem>
                        <TextArea placeholder="请输入预览内容" rows={4} value={contentPrev} onChange={prevChange}/>
                    </FormItem>
                    <FormItem>
                        <Mention
                            style={{ width: '100%' }}
                            placeholder="请输入标签"
                            suggestions={tags}
                        />
                    </FormItem>
                </Form>
            </div>
        )
    }
}