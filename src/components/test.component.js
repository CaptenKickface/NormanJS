import React, { Component } from 'react';
import NavBar from "./navbar.component";
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

        this.state = {            
            timeOne: 0,
            wrongOne: [],
            timeTwo: 0,
            wrongTwo: [],
            timeThree: 0,
            wrongThree: [],
            question: 1,            
        }  
    }
    render() {
        return (
            <div className="App">
               
                <NavBar/>
                
            </div>
        )
    }
}