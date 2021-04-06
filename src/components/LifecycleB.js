import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor() {
        super();

        this.state = {
            name: 'sachin'
        }

        console.log("constructor - LifecycleB")
    }

    static getDerivedStateFromProps() {
        console.log("get derived state from props LifecycleB");
        return null;
    }

    shouldComponentUpdate() {
        console.log("should Component Update LifecycleB")
        return true;
    }

    componentDidMount() {
        console.log("component did mount LifecycleB");
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate LifecycleB")
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate LifecycleB")
    }

    render() {
        console.log("render method - LifecycleB");
        return <div>
            <h1>Lifecycle B</h1>
        </div>
    }
}

export default LifecycleB;