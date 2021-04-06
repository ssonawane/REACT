import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
	
	

    changeCounter = () => {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count));

        this.setState(prevState => {
            return {count: prevState.count +  1}
        });

        console.log('after-', this.state.count)
    }

    increment = () => {
        this.changeCounter();
        this.changeCounter();
        this.changeCounter();
    }

    render() {
        return <div>
        <h1>My Count - {this.state.count}</h1>
        <button onClick={this.increment}>Update Count</button>
        </div>
    }
}

export default Counter;