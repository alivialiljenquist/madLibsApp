import React, { Component } from 'react';
import MadlibTextBox from './madlibs_inputbox'
import {
    Col,
    Row
} from 'reactstrap';

export default class MadlibForm extends Component {
    render() {
        return(
            <Row style={{textAlign: 'center', color: 'white'}}>
                <MadlibTextBox num="1" placeholder="Color" />
                <MadlibTextBox num="2" placeholder="Adjective" />
                <MadlibTextBox num="3" placeholder="Verb" />
                <MadlibTextBox num="3" placeholder="Verb" />
                <MadlibTextBox num="3" placeholder="Verb" />
                <MadlibTextBox num="3" placeholder="Verb" />
                <MadlibTextBox num="3" placeholder="Verb" />
                <MadlibTextBox num="3" placeholder="Verb" />
                
            </Row>
        )
    }
}