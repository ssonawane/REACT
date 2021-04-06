import React, {useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'RESP': 
            return {
                loading: action.loading,
                post: action.payload,
                error: action.error
            }

    }
}


function DataFetchingReducerOne() {

    const [state , dispatch] = useReducer(reducer, initialState);

    useEffect(function() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
            dispatch({
                type: 'RESP',
                loading: false,
                payload: response.data,
                error: ''
            })
        }).catch(error => {

        })
    }, [])
    

    return (
        <h1>
            {state.loading ? 'Loading...' : state.post.title}
        </h1>
    )

}

export default DataFetchingReducerOne; 