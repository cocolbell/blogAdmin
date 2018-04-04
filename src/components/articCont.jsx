'use strict'
import React from 'react';
import { render } from 'react-dom';
import marked from 'marked'

import '../css/articCont.scss'
import '../css/markdown.scss'


export default class ArticCont extends React.Component {
    constructor(props) {
        super(props)
        // this.createMarkup = () => ({__html: marked(this.props.centent)})
    }

    render () {
        let contentChange = this.props.contentChange;
        return (
            <div className="articCont">
                <div className="contLeft">
                    <textarea value={this.props.content} onChange={contentChange}></textarea>
                </div>
                <div className="contRight markdown-body" dangerouslySetInnerHTML={{__html:this.props.markdown}}>
                </div>
            </div>
        )
    }
}
