import React, { useContext } from 'react';
import { CountContext } from '../StateShare';
import CategoryDetail from './ChildChild';

const Child = () => {
    const count = useContext(CountContext);

    return (
        <div>
            <h2>From Child: {count}</h2>
            <CategoryDetail></CategoryDetail>
        </div>
    );
};

export default Child;