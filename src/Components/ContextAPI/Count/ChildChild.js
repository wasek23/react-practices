import React, { useContext } from 'react';
import { CountContext } from '../StateShare';

const ChildChild = () => {
    const count = useContext(CountContext);

    return (
        <div>
            <h3>From Child Child: {count}</h3>
        </div>
    );
};

export default ChildChild;