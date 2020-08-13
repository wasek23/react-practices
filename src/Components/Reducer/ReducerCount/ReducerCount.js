import React, { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <section className="flexCenter">
            <h1>Reducer Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })} className="button buttonRadius">Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} className="button buttonRadius">Decrement</button>
        </section>
    );
};

export default ReducerCount;