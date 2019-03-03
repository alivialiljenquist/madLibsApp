import React, { Component } from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';

export default class MadlibTextBox extends Component {

    

    render() {
        return(
            <Col md="3" className="input-wrapper">
                <Row>
                    <Col md="2">
                        <label className="green-label">{this.props.num}</label>
                    </Col>
                    <Col md="10">
                        <input placeholder={this.props.placeholder} type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col md="2"></Col>
                    <Col md="10">
                        <div className="input-description">{this.props.placeholder}</div>

                    </Col>
                </Row>
            </Col>
            
        )
    }
}