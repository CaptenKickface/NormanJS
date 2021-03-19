import React, { Component } from 'react';
import NavBar from "./navbar.component";
import {Redirect} from "react-router-dom";
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
        const answers = ["Ned", "News", "Schedule"] 
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
    
    

    render() {
        console.log(this.props)       
        return (
            <div className="App">
               
                <NavBar handler={this.AnswerHandler}/>
                {this.state.question === 4 && <Redirect to={{ pathname: "/data", state: this.state}}/>}
            </div>
        )
    }
}