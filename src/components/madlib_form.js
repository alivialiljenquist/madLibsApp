import React, { Component } from 'react';
import MadlibTextBox from './madlibs_inputbox'
import {
    Col,
    Row,
    Card
} from 'reactstrap';

export default class MadlibForm extends Component {
    handleChange = function(props) {
        return function() {
            console.log(props.inputTitle)
        }  
    }

    render() {
        return(
            <div className="card-wrapper">
                <Card>
                    <Row style={{textAlign: 'center', color: 'white'}}>
                        <MadlibTextBox num="1" placeholder="Color" onChange={this.handleChange({inputTitle: "color"})}/>
                        <MadlibTextBox num="2" placeholder="Adjective" onChange={this.handleChange({inputTitle: "adjective"})}/>
                        <MadlibTextBox num="3" placeholder="Verb" onChange={this.handleChange({inputTitle: "verb"})}/>
                        <MadlibTextBox num="4" placeholder="Noun (Plural)" onChange={this.handleChange({inputTitle: "noun"})}/>
                        <MadlibTextBox num="5" placeholder="Verb" onChange={this.handleChange({inputTitle: "verb(1)"})}/>
                        <MadlibTextBox num="6" placeholder="Celebrity" onChange={this.handleChange({inputTitle: "celebrity"})}/>
                        <MadlibTextBox num="7" placeholder="Verb" onChange={this.handleChange({inputTitle: "verb(2)"})}/>
                        <MadlibTextBox num="8" placeholder="Adjective" onChange={this.handleChange({inputTitle: "adjective(1)"})}/>
                        
                    </Row>
                </Card>
                
            </div>
            
        )
    }
}