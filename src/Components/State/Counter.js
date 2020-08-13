import React, { useState, useEffect, useRef } from 'react';

const usePrevious = value => {
    const prev = useRef();

    useEffect(() => {
        prev.current = value;
    }, [value]);

    return prev.current;
}

function Counter(props) {
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);

    return (
        <section className="flexCenter">
            <h2>Count: {count}. Previous: {previous}</h2>

            <button onClick={() => setCount(count + 1)} className="button buttonRadius">+ Increase Count</button>

            <button onClick={() => setCount(count - 1)} className="button buttonRadius">- Decrease Count</button>
        </section>
    );
}
export default Counter;