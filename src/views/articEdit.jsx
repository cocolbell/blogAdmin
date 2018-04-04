'use strict'
import React from 'react';
import { render } from 'react-dom';

import marked from 'marked'

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

import ArticInfo from '../components/articInfo.jsx'
import ArticCont from '../components/articCont.jsx'

import '../css/articEdit.scss'


export default class ArticEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            info: {
                title: "",
                contentPrev: "",
                tags: []
            },
            content: "",
            markdown: ""
        }
        this.stepNext = this.stepNext.bind(this);
        this.stepPrev = this.stepPrev.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.prevChange = this.prevChange.bind(this);
        this.tagsChange = this.tagsChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
    }
    stepNext () {
        this.setState({
            current : ++this.state.current
        })
    }
    stepPrev () {
        this.setState({
            current : --this.state.current
        })
    }
    titleChange (e) {
        this.setState({
            info: Object.assign({}, this.state.info, {title: e.target.value})
        }) 
    }
    prevChange (e) {
        this.setState({
            info: Object.assign({}, this.state.info, {contentPrev: e.target.value})
        }) 
    }
    tagsChange (editorState) {
        this.setState({
            info: Object.assign({}, this.state.info, {tags: editorState})
        })  
    }
    contentChange (e) {
        this.setState({
            content: e.target.value
        },this.toMarkdown)
    }
    toMarkdown () {
        this.setState({
            markdown: marked(this.state.content)
        })
    }
    render () {
        return (
            <div className="articEdit">
                <div className='stepHead'>
                    <Steps progressDot current={this.state.current}>
                        <Step title="编辑信息"/>
                        <Step title="发布文章"/>
                    </Steps>
                </div>
                <div className='stepBody'>
                {
                    this.state.current === 0
                    &&
                    <ArticInfo info={this.state.info} method={
                        {
                            titleChange : this.titleChange,
                            prevChange : this.prevChange,
                            tagsChange : this.tagsChange
                        }
                    } onTitleChange={this.titleChange}></ArticInfo>
                }
                {
                    this.state.current === 1
                    &&
                    <ArticCont content={this.state.content} markdown={this.state.markdown} contentChange={this.contentChange}></ArticCont>
                }
                </div>
                <div className='stepFoot'>
                {
                    this.state.current > 0
                    &&
                    <Button type="primary" style={{margin : 20}} onClick={this.stepPrev}>上一步</Button>
                }
                {
                    this.state.current === 1
                    &&
                    <Button type="primary" style={{margin : 20}}>发布文章</Button>
                }
                {
                    this.state.current < 1
                    &&
                    <Button type="primary" style={{margin : 20}} onClick={this.stepNext}>下一步</Button>
                }
                </div>               
            </div>
        )
    }
}