import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HoverClick extends Component {
    
    render() {
        const { count, changeCounter } = this.props;
        return (
            <div>
                <button onMouseOver={changeCounter}>{this.props.name} Count {count}</button>
            </div>
        )
    }
}

export default UpdatedComponent(HoverClick);