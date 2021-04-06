import React, { Component } from 'react';

const UpdatedComponent = (OriginalComp) => {
    class NewComp extends Component {
        constructor() {
            super();
    
            this.state = {
                count: 0
            }
        }
    
        changeCounter = () => {
            this.setState((prevState) => {
                return {count: prevState.count +  1}
            })
        }
    
        render() {
            return <OriginalComp count={this.state.count} changeCounter={this.changeCounter}/>
        }
    }

    return NewComp
}

export default UpdatedComponent;