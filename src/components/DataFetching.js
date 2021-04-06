import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState('');
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res);
        }).catch(error => {
            console.log("error in api")
        })
    }, [])

    return <div>

    </div>
}

export default DataFetching;