import React, { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../StateShare';
import CategoryDetail from './CategoryDetail';

const allProducts = [
    { name: "Dell", category: "laptop" }, { name: "Apple", category: "laptop" }, { name: "HP", category: "laptop" },
    { name: "Apple", category: "mobile" }, { name: "Huawei", category: "mobile" }, { name: "Samsung", category: "mobile" },
    { name: "Nikon", category: "camera" }, { name: "Sony", category: "camera" }, { name: "Canon", category: "camera" }
];

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState();

    useEffect(() => {
        const matchCategory = allProducts.filter(cat => cat.category === category.toLowerCase());
        setProducts(matchCategory);
    }, [category]);

    return (
        <div>
            <h1>Category: {category}</h1>
            {
                products && products.map(pd => <CategoryDetail key={pd.name} product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;