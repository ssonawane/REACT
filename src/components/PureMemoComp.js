import React from 'react';

function PureMemoComp({name}) {
    console.log("Pure memo functional comp")
    return <div>
<h1>functional component - {name}</h1>
    </div>
}

export default React.memo(PureMemoComp);