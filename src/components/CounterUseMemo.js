import React, { useState, useMemo } from 'react';

function CounterUseMemo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    ;

    const isEven = useMemo(() => {
        let i = 0;
        while (i<900000000) i++;
        return (count1 % 2 == 0) ? true : false; 
    }, [count1])

    

    return <div>
        <div>
<button onClick={() => setCount1(count1+1)}>count 1 - {count1}</button>&nbsp;&nbsp;&nbsp;
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={() => setCount2(count2+1)}>count 2 - {count2}</button>
        </div>
    </div>
}
export default CounterUseMemo;
