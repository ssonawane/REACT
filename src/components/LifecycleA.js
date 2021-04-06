import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'sachin'
        }

        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from props");
        return null;
    }

    shouldComponentUpdate() {
        console.log("should Component Update")
        return true;
    }

    componentDidMount() {
        console.log("component did mount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "shreeja"
        })
    }

    render() {
        console.log("render method");
        return <div>
            <h1>Lifecycle A</h1>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB/>
        </div>
    }
}

export default LifecycleA;