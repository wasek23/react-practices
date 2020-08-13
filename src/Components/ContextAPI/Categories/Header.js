import React, { useContext } from 'react';
import { CategoryContext } from '../StateShare';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>From Header: {category}</h1>
            <button onClick={() => setCategory('Laptop')} className="button buttonRadius">Laptop</button>
            <button onClick={() => setCategory('Mobile')} className="button buttonRadius">Mobile</button>
            <button onClick={() => setCategory('Camera')} className="button buttonRadius">Camera</button>
        </div>
    );
};

export default Header;