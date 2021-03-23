import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


export default class Intro extends Component {
    constructor(props) {
        super(props);

        this.onChangeDemo = this.onChangeDemo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);       
        this.visibility = this.visibility.bind(this);        
      

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
        var x = document.getElementById("voodoo");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
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

    visibility() {
        var x = document.getElementById("magician");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        var y = document.getElementById("voodoo");
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }
      }



    
    
    render() {
        return (     
            <div >
                <div id="magician">
                <br/><br/><br/><br/><br/>
                    <Row className="justify-content-md-center"><h3>Hey, welcome to Norman.</h3></Row>
                    <br/><br/><br/>
                    <Row className="justify-content-md-center"><h3>Pick your demographic:</h3></Row> 
                        <div className="form-group">             
                            <Row><Col><input type="radio" name='Fake' text="blue" /> XVIII XXV</Col></Row>
                            <br/>
                            <Row>
                                <Col></Col>
                                <Col></Col>                                
                            <Col><input type="radio" name='Fake' /> lllllllllllllllllllllllllll-llllllllllllllllllllllllllllllllllllllll</Col>
                            <br/>
                            </Row>
                            <br/><br/><br/><br/><br/><br/>
                            <Row>
                            <Col></Col>
                            <Col><input type="radio" name='Fake' /> Like... old, but not super old?</Col>
                            <br/>
                            </Row>
                            <Row>
                            <Col>Pfffff</Col>                                
                            <Col><input type="radio" name='Fake' /> (18/6*5) + 9*5</Col>
                            
                            <Col></Col>
                            <Col></Col>
                            </Row>          
                        </div>
                            

                        <div className="form-group">                   
                        </div>
                    
                    <br/><br/>
                    <Row className="justify-content-md-center"><Button onClick={() => {{} {this.visibility()}}} value="" className="btn btn-primary">Submit...?</Button>
                       
                    </Row>
                </div>

                <div id='voodoo'>
                    <br/><br/><br/><br/><br/>
                    <Row className="justify-content-md-center"><h3>Well that was... something. Let's try that again.</h3></Row>
                    <br/><br/><br/>
                    <Row className="justify-content-md-center"><h3>Pick your demographic:</h3></Row>
                    <br/><br/><br/><br/>
                    
                    
                    <Row className="justify-content-md-center">
                        
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
                        </div>
                    </Row>
                    <br/><br/>
                    <Row className="justify-content-md-center"><Button onClick={this.onSubmit} value="" className="btn btn-primary">Here we go</Button>
                        {this.state.id && <Redirect to={{ pathname: "/test", state: this.state}}/>}
                    </Row>
                </div>
            </div> 
        )
    }
}