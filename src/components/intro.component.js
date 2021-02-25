import React, { Component } from 'react';

export default class Intro extends Component {
    constructor(props) {
        super(props);

        this.onChangeDemo = this.onChangeDemo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //The Following needs to be refactored to test
        // this.onChangeTimeOne = this.onChangeTimeOne.bind(this);
        // this.onChangeClickOne = this.onChangeClickOne.bind(this);
        // this.onChangeTimeTwo = this.onChangeTimeTwo.bind(this);
        // this.onChangeClickTwo = this.onChangeClickTwo.bind(this);
        // this.onChangeTimeThree = this.onChangeTimeThree.bind(this);
        // this.onChangeClickThree = this.onChangeClickThree.bind(this);
        // this.onChangeComplete = this.onChangeComplete.bind(this);

        this.state = {
            demographic: '',
            timeOne: 0,
            clickOne: [],
            timeTwo: 0,
            clickTwo: [],
            timeThree: 0,
            clickThree: [],
            complete: false
        }  
    }

    componentDidMount() {
        //Anything Here Loads before display
    }

    onChangeDemo(e) {
        this.setState({
            demographic: e.target.value
        });    
    }

    onSubmit(e) {
        e.preventDefault();

        const dataList = {
            demographic: this.state.demographic,
            timeOne: this.state.timeOne,
            clickOne: this.state.clickOne,
            timeTwo: this.state.timeTwo,
            clickTwo: this.state.clickTwo,
            timeThree: this.state.timeThree,
            clickThree: this.state.clickThree,
            complete: this.state.complete,
        }

        console.log(dataList);

        window.location = '/test';
    }

    // Intro = () => {
    //     const introduction = <p>Hey, please pick your age demographic</p>;
    //     const demoQ = <form>
    //         <input type="radio" name="choice" value="18-25"/> 18-25
    // <input type="radio" name="choice" value="25-40"/> 25-40
    // <input type="radio" name="choice" value="40-60"/> 40-60
    // <input type="radio" name="choice" value="60+"/> 60+
    //     </form>
    //     const submitButton =  <button onclick="submitAnswer()">Submit Answer</button>
    
    //     const submitAnswer = () => {
    
    //     }
    //     var radios = document.getElementsByName('choice');
    //     var value = "";
    // }
    render() {
        return (
            console.log('Potato')
        // //     <div className="instructions">
        // //     <h1>{introduction}</h1>  
        // //     <div>{demoQ}</div>  
        // //     <div>{submitButton}</div>        
        // // </div>
        )
    }
}