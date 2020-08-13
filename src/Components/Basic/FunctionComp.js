import React from 'react';

// function FunctionComp() {
//     // Single line
//     // return <h1>My First Function Component</h1>;

//     const funClick = msg => alert(msg);

// return (
//     <section className="flexCenter">
//         <div>
//             <h1>My First Function Component</h1>
//             <button onClick={funClick.bind(this, "Button Clicked form Function Component")} style={{ fontSize: "20px", border: "none", padding: "10px 20px", marginTop: "20px" }}>Function Button</button>
//         </div>
//     </section>
// );
// }
// export default FunctionComp;

// Arrow Function
const FunctionComp = () => {
    // Single line
    // return <h1>My First Function Component</h1>;

    const funClick = msg => alert(msg);

    return (
        <section className="flexCenter">
            <h1>My First Function Component</h1>
            <button onClick={funClick.bind(this, "Button Clicked form Function Component")} className="button">Function Button</button>
        </section>
    );
};
export default FunctionComp;