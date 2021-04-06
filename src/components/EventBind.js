import React, { Component } from 'react';

export class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello everyone',
            isLoggedIn: true
        }
        // this.changeMessage = this.changeMessage.bind(this);
    }

     changeMessage = () => {
        console.log(this);
        this.setState({
            msg: 'Hello Shreeja'
        })
    }

    changeFlag = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {

        return (
            this.state.isLoggedIn && <h1>Welcome Logged in User</h1>
            // this.state.isLoggedIn ? <h1>Welcome Logged in User</h1> : <h1>You are a guest User</h1>
        )

        // let changeDOM = '';
        // if(this.state.isLoggedIn) {
        //     changeDOM = <h1>Welcome Logged in User</h1>;
        // } else {
        //     changeDOM = <h1>You are a guest User</h1>
        // }
        // return changeDOM;
        
        // return <div>
        //     <h1>{this.state.msg}</h1>
        //     <button onClick={this.changeMessage}>Click to Change Message</button>
        // </div>
    }
}