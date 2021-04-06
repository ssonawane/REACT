import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingReducer() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(function() {
        console.log("calling");
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=> {
            setLoading(false);
            setPost(response);
            setError('');
        }).catch(error => {
            setLoading(true);
            setPost({});
            setError(error);
        })
    }, [])

    return (
        <div>

        </div>
    )

}

export default DataFetchingReducer; 