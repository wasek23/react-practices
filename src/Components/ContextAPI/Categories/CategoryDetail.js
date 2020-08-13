import React from 'react';

const CategoryDetail = (props) => {
    const { name, category } = props.product;

    return (
        <div>
            <h3>{category} category product: {name}</h3>
        </div>
    );
};

export default CategoryDetail;