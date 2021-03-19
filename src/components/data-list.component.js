import React, { Component } from 'react';

export default class DataList extends Component {
    constructor(props) {
        super(props); 

        this.state = this.props.location.state
      }


    render() {
        console.log(this.state)
        return (
            <div>
                <p>You are on the Data List component!</p>
            </div>
        )
    }
}