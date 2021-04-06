import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            username:'',
            comments: '',
            topic: ''
        }
    }

    changeUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    changeComments = event => {
        this.setState({
            comments: event.target.value
        })
    }

    changeTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    submitForm = event => {
        alert(`Username- ${this.state.username}   Comments- ${this.state.comments}  Topic- ${this.state.topic}`)
        event.prevetDefault();
    }

    render() {
        const { username, comments, topic } = this.state;
        return <form onSubmit={this.submitForm}>
            <div>
                <label>User name: </label>
                <input type="text" value={username} onChange={this.changeUsername}/>
            </div><br/>
            <div>
                <label>Comments: </label>
                <textarea value={comments} onChange={this.changeComments}></textarea>
            </div><br/>
            <div>
                <label>Topic: </label>
                <select value={topic} onChange={this.changeTopic}>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </select>
            </div><br/>
            <button type="submit">Submit</button>
        </form>
    }
}

export default Form;