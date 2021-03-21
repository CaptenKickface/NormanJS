import React, { Component } from 'react';
import NavBar from "./navbar.component";
import {Redirect} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import SideButtons from './sideButtons.component.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

//The Following needs to be refactored to /test
        // this.onChangeTimeOne = this.onChangeTimeOne.bind(this);
        // this.onChangeWrongOne = this.onChangeWrongOne.bind(this);
        // this.onChangeTimeTwo = this.onChangeTimeTwo.bind(this);
        // this.onChangeWrongTwo = this.onChangeWrongTwo.bind(this);
        // this.onChangeTimeThree = this.onChangeTimeThree.bind(this);
        // this.onChangeWrongThree = this.onChangeWrongThree.bind(this);
        // this.onChangeComplete = this.onChangeComplete.bind(this);
export default class Test extends Component {
    constructor(props) {
        super(props); 

        
        this.AnswerHandler = this.AnswerHandler.bind(this);
        this.state = this.props.location.state
      }
    AnswerHandler (answer) {
        
        console.log(answer)
        console.log(this.state)
        const answers = ["Canada", "Ned", "unsubscribe"] 
        const currentQ = this.state.question
        
        if (answer == answers[currentQ-1]) {
            this.setState((prevState) => ({question: prevState.question +1})) 
            
        } else {
        
        
            if(this.state.question === 1) {
                if (!this.state.wrongOne.includes(answer)) {
                    this.setState((prevState) => ({ wrongOne: prevState.wrongOne.concat(answer)}))            
                }
            } else if (this.state.question === 2) {
                if (!this.state.wrongTwo.includes(answer)) {
                    this.setState((prevState) => ({ wrongTwo: prevState.wrongTwo.concat(answer)}))
                }
            } else if (this.state.question === 3) {
                console.log('Kevin be lame yo')
                if (!this.state.wrongThree.includes(answer)) {
                    this.setState((prevState) => ({wrongThree: prevState.wrongThree.concat(answer)}))
                }
            } else {
                console.log('No question written')
            }
        }
        console.log(this.state.wrongOne)
        console.log(this.state.wrongTwo)
        console.log(this.state.wrongThree)
        console.log(this.state.question)
        
    }   

    Instruct() {        
    
        const first = 
        <div>            
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to the test!</h1>
                        <p>
                            This website was designed... poorly. I'm going to ask you to do
                            your best to find things around it. How about we start things off simply? 
                            Try and click where I could find Canadian Bacon.
                        </p>
                </Container>
            </Jumbotron>
        </div>
    
        const second = 
        <div>           
            <Jumbotron fluid>
                <Container>
                    <h1>Now it gets tricky</h1>
                        <p>
                        Second, I want you to try and find Ned. I've been meaning to talk
                        to him. He didn't even give me his phone number.
                        </p>
                </Container>
            </Jumbotron>
        </div>
    
        const third = 
        <div>
           <h3></h3>
            <Jumbotron fluid>
                <Container>
                    <h1>Finally, try to unsubscribe</h1>
                        <p>
                            In most websites that you subscribe to, finding the unsubscribe button can be tricky. It's designed to
                            disuade you from taking your business elsewhere and frustrating you to the point of giving up. Can you 
                            find the unsubscribe button and escape this hellscape?
                        </p>
                </Container>
            </Jumbotron>
        </div>

        const instructArray = [first, second, third]
    
        return (
            instructArray[this.state.question - 1]
        )
    }

    render() {
            
        return (
            <div className="App">               
                
                <Container className="float-left" fluid='true'>
                <Row><NavBar handler={this.AnswerHandler}/></Row>
                <br/>
                <br/>
                <br/>
                    <Row>           
                        <Col lg={4} md={5} ><SideButtons handler={this.AnswerHandler}/></Col>
                        <Col ><div className="Instructions">{this.Instruct()}</div></Col>
                   </Row>                
                    {this.state.question === 4 && <Redirect to={{ pathname: "/data", state: this.state}}/>}
                </Container>
                
            </div>
        )
    }
}