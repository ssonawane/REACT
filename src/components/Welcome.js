import react, { Component } from 'react';

class Welcome extends Component {
    render() {
    return <h1>City name is {this.props.place}</h1>
    }
}

export default Welcome;