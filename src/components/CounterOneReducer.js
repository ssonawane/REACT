import React, { useReducer } from 'react';

const initialState = {
    firstCount : 0,
    secondCount: 10 
};
const reducer = (state, action) => {

    switch(action.type) {
        case 'increment': 
            return {...state, firstCount: state.firstCount + action.value}; 
            break;
        case 'decrement': 
            return {...state, firstCount: state.firstCount - action.value}; 
            break;
        case 'increment1': 
            return {...state, secondCount: state.secondCount + action.value}; 
            break;
        case 'decrement2': 
            return {...state, secondCount: state.secondCount - action.value}; 
            break;
        case 'reset': 
            return initialState; 
            break;
    }
}

function CounterOneReducer() {

    const[count, dispatch] = useReducer(reducer, initialState);

    return <div>
        <h1>First Count - {count.firstCount}</h1>
        <h1>Second Count - {count.secondCount}</h1>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement</button>
        <button onClick={() => dispatch({type: 'increment1', value: 5})}>increment by 5</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 5})}>decrement by 5</button>
        <button onClick={() => dispatch({type: 'reset', value: 0})}>reset</button>
    </div>
}

export default CounterOneReducer;