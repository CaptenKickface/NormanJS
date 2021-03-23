import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';


   

  

export default class SideButtons extends Component {

    
    
    render(){
        return(
        <div className="ml-0">
            <Card bg='secondary' text='white' style={{width: '18rem'}} className="mb-1">                
                <Card.Body>
                    <Card.Title > Where's Ned? </Card.Title>
                    <Card.Text>
                    Last seen back-packing across the pacific, Ned owes me money and can't be found!
                    Click below to donate money in his stead!
                    </Card.Text>
                    <Button variant="light" onClick={() => this.props.handler('Donate!')}>Donate!</Button>{''}
                </Card.Body>
            </Card>
            <Card bg='info' text='white' style={{width: '18rem'}} className="mb-1">                
                <Card.Body>
                    <Card.Title > Avoid talking about Norman! </Card.Title>
                    <Card.Text>
                    Think of five things that Norman can't reproduce to escape Norman's grasp.
                    Now, remember Norman!
                    </Card.Text> 
                    <Button variant="light" onClick={() => this.props.handler('No-man?')}>No-man?</Button>{' '}
                </Card.Body>
            </Card>
            <Card bg='primary' text='white' style={{width: '18rem'}} className="mb-1">                
                <Card.Body>
                    <Card.Title > Why Leave? </Card.Title>
                    <Card.Text>
                    This is your home now: who would want to leave!?
                    If you look below, you'll find the thing you SHOULDN'T do!
                    So don't!
                    </Card.Text> 
                    <Button variant="link" onClick={() => this.props.handler('unsubscribe')}>unsubscribe</Button>{' '}
                </Card.Body>
            </Card>
            <Card bg='secondary' text='white' style={{width: '18rem'}} className="mb-1">                
                <Card.Body>
                    <Card.Title > Tell Me More! </Card.Title>
                    <Card.Text>
                    If you can't get enough of Norman, why stop here!?
                    Google "Norman" to see plenty of people who may or may not be named "Norman"!
                    </Card.Text> 
                    <Button href="https://www.google.com/search?q=Norman&client=firefox-b-1-d&sxsrf=ALeKk00KoFoIlq9encJZnDoujh3ydHDoFg%3A1616482569537&ei=CZFZYOWpINW0tAbCjbPYDA&oq=Norman&gs_lcp=Cgdnd3Mtd2l6EAMyCAguELEDEJMCMggILhCxAxCDATIFCC4QsQMyCAguEMcBEK8BMgUILhCxAzIFCC4QsQMyBQgAELEDMgIIADIFCC4QsQMyAggAOgcIIxCwAxAnOgcIABBHELADOgQIIxAnOgUIABCRAjoICC4QxwEQowI6CAgAELEDEIMBOgQILhBDOgQIABBDOgsILhCxAxDHARCjAjoCCC46BwguELEDEENQvk9Y7lNg2VRoAXACeACAAXSIAfAEkgEDNi4xmAEAoAEBqgEHZ3dzLXdpesgBCcABAQ&sclient=gws-wiz&ved=0ahUKEwil0t7q6sXvAhVVGs0KHcLGDMsQ4dUDCAw&uact=5"
                     target="_blank" variant="light" onClick={() => this.props.handler('Norman!')}>Norman!</Button>{' '}
                </Card.Body>
            </Card>            
        </div>
        )
    }
}
