import React, { useContext } from 'react';
import { CountContext } from '../StateShare';

const Decrement = () => {
    const [count, setCount] = useContext(CountContext);

    return (
        <div>
            <button onClick={() => setCount(count - 1)} className="button buttonRadius">Decrement</button>
            <h1>From Decrement: {count}</h1>
        </div>
    );
};

export default Decrement;