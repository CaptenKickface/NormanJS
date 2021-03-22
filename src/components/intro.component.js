import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class Intro extends Component {
    constructor(props) {
        super(props);

        this.onChangeDemo = this.onChangeDemo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);       

        this.state = {
            demographic: '',
            timeOne: 0,
            wrongOne: [],
            timeTwo: 0,
            wrongTwo: [],
            timeThree: 0,
            wrongThree: [],
            question: 1,
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
            wrongOne: this.state.wrongOne,
            timeTwo: this.state.timeTwo,
            wrongTwo: this.state.wrongTwo,
            timeThree: this.state.timeThree,
            wrongThree: this.state.wrongThree,
            complete: this.state.complete,
        }

        console.log(dataList);
// only make call when radio button selected
        if (this.state.demographic){
            axios.post('http://localhost:5000/data', dataList)
                .then(res => this.setState(prevState => ({...prevState,id: res.data._id})))
                .then(()=>(console.log(this.state)))
        }

        
    }


    
    render() {
        return (            
            <div>
                
                <h3>Hey, pick your demographic:</h3>
                
                <Container>
                    <div className="form-group">             
                        <input type="radio" name='Demo' value= '18-25' onChange={this.onChangeDemo}/> 18-25
                        <br/>
                        <input type="radio" name='Demo' value= '25-40' onChange={this.onChangeDemo}/> 25-40
                        <br/>
                        <input type="radio" name='Demo' value= '40-60' onChange={this.onChangeDemo}/> 40-60
                        <br/>
                        <input type="radio" name='Demo' value= '60+' onChange={this.onChangeDemo}/> 60+                     
                    </div>       

                    <div className="form-group">
                    
                    <Button onClick={this.onSubmit} value="" className="btn btn-primary">Here we go</Button>
                    {this.state.id && <Redirect to={{ pathname: "/test", state: this.state}}/>}
                   
                    </div>
                </Container>
            </div>
        )
    }
}