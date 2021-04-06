import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor() {
        super();
        this.state = {
            name: 'sachin'
        }
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.cbRefCall = element => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
         console.log(this.inputRef);
         this.inputRef.current.focus()
         if(this.cbRef) {
            this.cbRef.focus();
         }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
        alert(this.cbRef.value)
    }

    render() {
        return <div>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Submit</button> <br/>
            <input type="text" ref={this.cbRefCall}/>
        </div>
    }
}

export default RefsDemo;