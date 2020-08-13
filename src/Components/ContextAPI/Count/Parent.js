import React, { useContext } from 'react';
import Categories from './Child';
import { CountContext } from '../StateShare';

const Parent = props => {
    const count = useContext(CountContext);

    return (
        <div style={{ border: '1px solid blue' }}>
            <h1>From Parent: {count}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Parent;