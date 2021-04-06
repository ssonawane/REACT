import React, { Component } from 'react';

class Input extends Component{
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.state = {
            name: 'sachin'
        }
    }

    inputFocus() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    changeFocus() {

    }

    render() {
        return <div>
            <input type="text" ref={this.inputRef}/>
        </div>
    }
}

export default Input;