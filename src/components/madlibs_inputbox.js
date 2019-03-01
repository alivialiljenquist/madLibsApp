import React, { Component } from 'react';
import {
    Col,
    Row
} from 'reactstrap';

export default class MadlibTextBox extends Component {

    handleChange = function() {
        console.log('trying')
    }

    render() {
        return(
            <Col md="3" className="inputWrapper">
                <Row>
                    <Col md="2">
                        <label className="greenLabel">{this.props.num}</label>
                    </Col>
                    <Col md="10">
                        <input placeholder={this.props.placeholder} type="text" onChange={this.handleChange}/>
                    </Col>
                </Row>
            </Col>
            
        )
    }
}