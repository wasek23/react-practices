import React, { useContext } from 'react';
import { CountContext } from '../StateShare';

const Increment = () => {
    const [count, setCount] = useContext(CountContext);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} className="button buttonRadius">Increment</button>
            <h1>From Increment: {count}</h1>
        </div>
    );
};

export default Increment;