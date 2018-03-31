'use strict'
import React from 'react';
import { render } from 'react-dom';

import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

import ArticInfo from '../components/articInfo'
import ArticCont from '../components/articCont'

import '../css/articEdit.css'


export default class ArticEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
        this.stepNext = this.stepNext.bind(this);
        this.stepPrev = this.stepPrev.bind(this);
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
    render () {
        return (
            <div className="articEdit">
                <div className='stepHead'>
                    <Steps progressDot current={this.state.current}>
                        <Step title="编辑信息"/>
                        <Step title="编辑内容"/>
                        <Step title="发布文章"/>
                    </Steps>
                </div>
                <div className='stepBody'>
                {
                    this.state.current === 0
                    &&
                    <ArticInfo></ArticInfo>
                }
                {
                    this.state.current === 1
                    &&
                    <ArticCont></ArticCont>
                }
                </div>
                <div className='stepFoot'>
                {
                    this.state.current > 0
                    &&
                    <Button type="primary" style={{margin : 20}} onClick={this.stepPrev}>上一步</Button>
                }
                {
                    this.state.current === 2
                    &&
                    <Button type="primary" style={{margin : 20}}>发布文章</Button>
                }
                {
                    this.state.current < 2
                    &&
                    <Button type="primary" style={{margin : 20}} onClick={this.stepNext}>下一步</Button>
                }
                </div>               
            </div>
        )
    }
}