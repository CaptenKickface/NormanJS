import React, { Component } from 'react';

export default class DataList extends Component {
    constructor(props) {
        super(props); 

        this.state = this.props.location.state
      }


    render() {
        console.log(this.state)
        return (
            <p>Data it up!</p>
        )
    }
}