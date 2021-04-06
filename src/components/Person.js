import React from 'react';

function Person(props) {
    return <div>
        <h1>Hello! My name is {props.name} I am from {props.city}</h1>
    </div>
}

export default Person;