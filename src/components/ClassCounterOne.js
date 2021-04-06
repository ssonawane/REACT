import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Button is clicked ${this.state.count} times`;
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return 'hello'
    }

    componentDidUpdate(prevProps, PrevState) {
        document.title = `Button is clicked ${this.state.count} times`;
        console.log(this.state.count)
    }

    render() {
        return <div>
    <button onClick={() => this.setState({count: this.state.count + 1})}> button is clicked {this.state.count} times</button>
        </div>
    }
}

export default ClassCounterOne;