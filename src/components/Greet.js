import React from 'react';

export function Greet({name}) {
return <div>
    <h1>Hello! {name}</h1>
    
    </div>
}

export const Hello = (props) => {
    return <div><h1>Hello! {props.name}</h1></div>
}

// export default Hello;