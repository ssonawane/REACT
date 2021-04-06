import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello Everyone'
        }
    }

    changeMeassage = () => {
        this.setState({
            msg: 'Hiiiiii'
        })
    }
    render() {
        return <div>
            <h1>Message - {this.state.msg}</h1>
            <button onClick={this.changeMeassage}>Change</button>
        </div>
    }
}

export default Message;