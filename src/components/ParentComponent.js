import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            parent: "Parent"
        }
    }
    
    greetParent = child => {
        alert(`Hello ${this.state.parent} My name is ${child}`);
    }

    render() {
        return <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
    }
}

export default ParentComponent