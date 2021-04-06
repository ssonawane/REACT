import React, { useEffect, useRef } from 'react';

function FocusInputUseRef() {

    const inputRef = useRef(null);

    useEffect(function() {
        inputRef.current.focus();
    }, [])

    return <div>
        <input type="text" ref={inputRef}></input>
    </div>
}

export default FocusInputUseRef;