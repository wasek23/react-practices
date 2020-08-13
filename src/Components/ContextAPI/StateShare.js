import React, { useState, createContext } from 'react';

// import Increment from './Count/Increment';
// import Decrement from './Count/Decrement';
// import Parent from './Count/Parent';

import Header from './Categories/Header';
import Categories from './Categories/Categories';

// export const CountContext = createContext();
export const CategoryContext = createContext();

const StateShare = () => {
    // const [count, setCount] = useState(0);
    const [category, setCategory] = useState('Laptop');

    return (
        <section className="flexCenter">
            {/* <CountContext.Provider value={[count, setCount]}>
                <h1>State Count: {count}</h1>
                <Increment></Increment>
                <Decrement></Decrement>
                <Parent></Parent>
            </CountContext.Provider> */}

            <CategoryContext.Provider value={[category, setCategory]}>
                <h1>State Category: {category}</h1>
                <Header></Header>
                <Categories></Categories>
            </CategoryContext.Provider>
        </section>
    );
};

export default StateShare;