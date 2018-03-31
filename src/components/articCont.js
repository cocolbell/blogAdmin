'use strict'
import React from 'react';
import { render } from 'react-dom';

// import { Input } from 'antd';
// const TextArea = Input.TextArea;


export default class ArticCont extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className="articCont">
                <textarea></textarea>
            </div>
        )
    }
}