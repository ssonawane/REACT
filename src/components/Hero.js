import React, { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { name } = this.props;

        if(name === "NA") {
          //return throw new Error("invalid data")
        }
        return <div>
            <h1>Hi {this.props.name}</h1> 
        </div>
    }
}

export default Hero;