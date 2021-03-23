import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'





export default class DataList extends Component {
    constructor(props) {
        super(props); 

        this.state = this.props.location.state
        this.onSubmit = this.onSubmit.bind(this);
        this.amountWrong = this.amountWrong.bind(this);   
        this.wrongObjectClicked = this.wrongObjectClicked.bind(this); 
        this.averageWrong = this.averageWrong.bind(this);
        this.visibility = this.visibility.bind(this);
        this.wrongObjectNotClicked = this.wrongObjectNotClicked.bind(this);        
        this.wrongYoung = this.wrongYoung.bind(this);
        this.wrongYoungMid = this.wrongYoungMid.bind(this);
        this.wrongOldMid = this.wrongOldMid.bind(this);
        this.wrongOld = this.wrongOld.bind(this);
      }

      visibility() {
        var x = document.getElementById("magician");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
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

    // wrongObjectClicked loop for array with all wrong options

    wrongObjectClicked(oof) {
        const wrongStuff = this.state.dataArray.reduce(((acc,item) => item.wrongOne.includes(oof) ? 1 + acc : acc),0)
        const wrongStuffTwo = this.state.dataArray.reduce(((acc,item) => item.wrongTwo.includes(oof) ? 1 + acc : acc),0)
        const wrongStuffThree = this.state.dataArray.reduce(((acc,item) => item.wrongThree.includes(oof) ? 1 + acc : acc),0)
         return (
             wrongStuff + wrongStuffTwo + wrongStuffThree
         )
    }

    wrongObjectNotClicked(oof) {
        const wrongStuff = this.state.dataArray.reduce(((acc,item) => !item.wrongOne.includes(oof) && !item.wrongTwo.includes(oof) && !item.wrongThree.includes(oof) ? 1 + acc : acc),0)
        
         return (
             wrongStuff
         )
    }

    wrongYoung() {
        const wrongYoung = this.state.dataArray.reduce(((acc,item) => item.demographic == '18-25' ? item.wrongOne.length + item.wrongTwo.length + item.wrongThree.length + acc : acc),0)
        
         return (
             wrongYoung
         )
    }

    wrongYoungMid() {
        const wrongYoungMid = this.state.dataArray.reduce(((acc,item) => item.demographic == '25-40' ? item.wrongOne.length + item.wrongTwo.length + item.wrongThree.length + acc : acc),0)
        
         return (
             wrongYoungMid
         )
    }

    wrongOldMid() {
        const wrongOldMid = this.state.dataArray.reduce(((acc,item) => item.demographic == '40-60' ? item.wrongOne.length + item.wrongTwo.length + item.wrongThree.length + acc : acc),0)
        
         return (
             wrongOldMid
         )
    }
    wrongOld() {
        const wrongOld = this.state.dataArray.reduce(((acc,item) => item.demographic == '60+' ? item.wrongOne.length + item.wrongTwo.length + item.wrongThree.length + acc : acc),0)
        
         return (
             wrongOld
         )
    }
    
    didComplete() {
        const wrongStuff = this.state.dataArray.reduce(((acc, item) => item.complete ? 1 + acc : acc),0)
        const totalPeople = this.state.dataArray.reduce(((acc, item) => item.id !== 'potato' ? 1 + acc : acc),0)
        const percentComplete = wrongStuff/totalPeople * 100
        return (
            percentComplete.toFixed(0) + '%'
        )
    }


    




    // leastMostWrong() {
        // const leastArray = []
        // const mostArray = []
        // const wrongStuff = this.state.dataArray.reduce(((acc,item) => item.wrongOne.length + acc),0)
        // const wrongStuffTwo = this.state.dataArray.reduce(((acc,item) => item.wrongTwo.length + acc),0)
        // const wrongStuffThree = this.state.dataArray.reduce(((acc,item) => item.wrongThree.length + acc),0)
    // }

    averageWrong(wrongArray) {
        const wrongStuff = this.state.dataArray.reduce(((acc,item) => item[wrongArray].length + acc),0)
        const totalPeople = this.state.dataArray.reduce(((acc, item) => item.id !== 'potato' ? 1 + acc : acc),0)  
        const average = totalPeople/wrongStuff 

        return (
            average.toFixed(1)
        )
    }
    


    onSubmit(e) {        
        e.preventDefault();        
        this.visibility()
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
            <div>
            <Container id='magician'>
                <Row className="justify-content-md-center">
                    <Jumbotron>
                        <h1>Congratulations!</h1>
                        <br/>
                        <p>Click below to see how you compare to everyone on Norman</p>                         
                       
                    </Jumbotron>
                </Row>
                <Row className="justify-content-md-center">
                <Button  variant="primary" value="true"  onClick={this.onSubmit}>I'm ready</Button>{''}
                </Row>
            </Container>
            {this.state.dataArray && 
                <Container>
                    <Row className="justify-content-md-center"><h1>Incorrect Clicks</h1></Row>
                    <br/>
                    <br/>
                    <Table striped bordered hover variant="dark" className="justify-content-md-center">
                        <thead>
                            <tr>                        
                            <th>Question:</th>
                            <th>You</th>
                            <th>The Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                        
                            <td>One</td>
                            <td>{this.state.wrongOne.length}</td>
                            <td>{this.averageWrong('wrongOne')}</td>
                            </tr>
                            <tr>                        
                            <td>Two</td>
                            <td>{this.state.wrongTwo.length}</td>
                            <td>{this.averageWrong('wrongTwo')}</td>
                            </tr>
                            <tr>                        
                            <td >Three</td>
                            <td>{this.state.wrongThree.length}</td>
                            <td>{this.averageWrong('wrongThree')}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center"><h1>Fun Facts</h1></Row>
                    <br/>
                    <br/>
                    <Carousel>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?size=626&ext=jpg"
                            alt="First slide"
                        />
                        
                            <Carousel.Caption>                            
                            <h1>How many people tried to check messages?</h1>                            
                            <br/>
                            <br/>
                            <br/>
                            <h1>{this.wrongObjectClicked('Messages')}</h1>
                            <br/>              
                            <br/>  
                            <br/>  
                            <br/>  
                            <br/>        
                            <br/>                          
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?size=626&ext=jpg"
                            alt="First slide"
                        />                        
                            <Carousel.Caption>
                            <h1>How many people helped Ned cover his debt?</h1>                            
                            <br/>
                            <br/>
                            <br/>
                            <h1>{this.wrongObjectClicked('Donate!')}</h1>
                            <br/>              
                            <br/>  
                            <br/>  
                            <br/>  
                            <br/> 
                            <br/>               
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?size=626&ext=jpg"
                            alt="First slide"
                        />                                
                            <Carousel.Caption>
                            <h1>How many people never clicked on the US?</h1>                           
                            <br/>
                            <br/>
                            <br/>
                            <h1>{this.wrongObjectNotClicked('US')}</h1>
                            <br/>              
                            <br/>  
                            <br/>  
                            <br/>  
                            <br/>                            
                            <p>How unpatriotic...</p> 
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        <br/>
                        <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center"><h1>Demographic Data</h1></Row>
                    <br/>
                    <br/>
                    <Table striped bordered hover variant="dark" className="justify-content-md-center">
                        <thead>
                            <tr>                        
                            <th>Demographic</th>
                            
                            <th>Incorrect Clicks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                        
                            <td>18-25</td>
                            
                            <td>{this.wrongYoung()}</td>
                            </tr>
                            <tr>                        
                            <td>25-40</td>
                            
                            <td>{this.wrongYoungMid()}</td>
                            </tr>
                            <tr>                        
                            <td >40-60</td>
                            
                            <td>{this.wrongOldMid()}</td>
                            </tr>
                            <tr>                        
                            <td >60+</td>
                            
                            <td>{this.wrongOld()}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br/>  
                    <br/>  
                    <br/>  
                    <br/>  
                    <br/>  
                    <br/>  
                   <Row className="justify-content-md-center"><h1>Thank you</h1></Row>
                   <Row className="justify-content-md-center"><p>We appreciate you taking the time to try Norman out. Only {this.didComplete()} of those
                   who start the test actually finish it. This site is dedicated to those who have always felt something is wrong on a website and can't
                   quite put their finger on what it is. Seriously, thank you for participating.</p></Row>
                   <br/>  
                   <br/>  
                   <br/>  
                   <br/>  
                   <br/>  
                    

                   
                </Container>
            }
    </div>
           
            
        )
    }
}