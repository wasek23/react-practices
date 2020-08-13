import React from 'react';

// Style
let productsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "30px"
}
let productStyle = {
    backgroundColor: "#666",
    padding: "20px",
    border: "1px solid gray",
    borderRadius: "5px"
}

const products = [
    { name: "PhotoShop", price: "$99.99" },
    { name: "Illustrator", price: "$79.99" },
    { name: "Acrobat Reader", price: "Free" },
    { name: "Adobe XD", price: "Free" }
];
function Products() {
    return (
        <section className="flexCenter">
            <h2>All Product Lists</h2>
            <ul style={{ listStyleType: "none" }}>
                {products.map(prod => <li key={prod.name}>{prod.name}</li>)}
            </ul>
            <div style={productsStyle}>
                {/* First way */}
                {/* <Product name={products[0].name} price={products[0].price}></Product>
                <Product name={products[1].name} price={products[1].price}></Product>
                <Product name={products[2].name} price={products[2].price}></Product>
                <Product name={products[3].name} price={products[3].price}></Product> */}

                {/* Second way */}
                {/* <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>
                <Product product={products[3]}></Product> */}

                {/* Third way */}
                {products.map(prod => <Product product={prod} key={prod.name}></Product>)}
            </div>
        </section>
    );
}

function Product(props) {
    // First way
    // return (
    //     <div style={productStyle}>
    //         <h2>{props.name}</h2>
    //         <h1>{props.price}</h1>
    //         <button>ENROLL NOW</button>
    //     </div>
    // );

    // Second and Third way
    const { name, price } = props.product;
    return (
        <div style={productStyle}>
            <h2>{name}</h2>
            <h1>{price}</h1>
            <button className="button buttonRadius">ENROLL NOW</button>
        </div>
    );
}

export default Products;