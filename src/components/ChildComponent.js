import React, {Component} from 'react';

class ChildComponent extends Component {
    constructor() {
        super();
        
    }

    render() {
        const {greetHandler} = this.props;
        return <div>
            <button onClick={() => greetHandler('Child')}>Greet Parent</button>
        </div>
    }
}

export default ChildComponent;