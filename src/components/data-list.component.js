import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Row from 'react-bootstrap/Row'




export default class DataList extends Component {
    constructor(props) {
        super(props); 

        this.state = this.props.location.state
        this.onSubmit = this.onSubmit.bind(this);
        this.amountWrong = this.amountWrong.bind(this);   
        this.wrongObjectClicked = this.wrongObjectClicked.bind(this); 
        this.averageWrong = this.averageWrong.bind(this);
        
        
      }
      componentDidMount() {
        console.log('Props')
        console.log(this.props)
        console.log('Location')
        console.log(this.props.location)
        console.log('Location-State')
        console.log(this.props.location.state)
        console.log(this.state.demographic)
     }

    amountWrong() {
    
        const wrongStuff = this.state.dataArray.reduce(((acc,item) => item.wrongOne.length + acc),0)
        const wrongStuffTwo = this.state.dataArray.reduce(((acc,item) => item.wrongTwo.length + acc),0)
        const wrongStuffThree = this.state.dataArray.reduce(((acc,item) => item.wrongThree.length + acc),0)
         return (
             wrongStuff + wrongStuffTwo + wrongStuffThree
         )
    }

    wrongObjectClicked(oof) {
        const wrongStuff = this.state.dataArray.reduce(((acc,item) => item.wrongOne.includes(oof) ? 1 + acc : acc),0)
        const wrongStuffTwo = this.state.dataArray.reduce(((acc,item) => item.wrongTwo.includes(oof) ? 1 + acc : acc),0)
        const wrongStuffThree = this.state.dataArray.reduce(((acc,item) => item.wrongThree.includes(oof) ? 1 + acc : acc),0)
         return (
             wrongStuff + wrongStuffTwo + wrongStuffThree
         )
    }

    averageWrong(wrongArray) {
        const wrongStuff = this.state.dataArray.reduce(((acc,item) => item[wrongArray].length + acc),0)
        const userAmount = this.state.dataArray.length      

        return (
            wrongStuff/userAmount
        )
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
            complete: true,
        }
        axios.put('http://localhost:5000/data/' + this.state.id, dataList)    
        .then(() => (axios.get('http://localhost:5000/data' )))
            .then((res) => this.setState ((prevState) => ({...prevState,dataArray: res.data})))
            // this.setState ((prevState) => ({...prevState,dataArray: res}))
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <Row>
                    <Jumbotron>
                        <h1>Congratulations!</h1>
                        <p>Click below to see how you compare to everyone on Norman</p>
                        <Button variant="primary" value="true" onClick={this.onSubmit}>I'm ready</Button>{''} 
                       {this.state.dataArray && this.wrongObjectClicked('Messages')}
                    </Jumbotron>
                </Row>
            </Container>
            
        )
    }
}