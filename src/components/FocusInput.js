import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
    constructor() {
        super();

        this.compRef = React.createRef();
    }

    clickHandler = () => {
        console.log(this.compRef.current);
        this.compRef.current.inputFocus();
    }

    render() {
        return <div>
            <Input ref={this.compRef}/>
            <button onClick={this.clickHandler}>Submit</button>
        </div>
    }
}

export default FocusInput;