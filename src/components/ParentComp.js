import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
import PureMemoComp from './PureMemoComp';

class ParentComp extends Component {

    constructor() {
        super();
        this.state = {
            name: 'sachin'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'shreeja'
            })
        }, 2000)
    }

    render() {
        console.log("-------------Parent Component-----------");
        return <div>
            <h1>Parent Component</h1>
            {/* <PureComp/>
            <RegComp/> */}
            <PureMemoComp name="shreeja"/>
        </div>
    }
}

export default ParentComp;