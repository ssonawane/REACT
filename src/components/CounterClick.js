import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class CounterClick extends Component {

    render() {
        const { count, changeCounter } = this.props;
        return (
            <div>
                <button onClick={changeCounter}>{this.props.name} Count {count}</button>
            </div>
        )
    }
}

export default UpdatedComponent(CounterClick);