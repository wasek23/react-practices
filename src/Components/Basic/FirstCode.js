import React from 'react';

// Style
let mySelf = {
    name: "Wasek Bellah",
    age: 21
}
let styleAuthor = {
    color: "blue",
    backgroundColor: "yellow",
    padding: "10px"
}

function FirstCode() {
    return (
        <section className="flexCenter">
            {/* Write HTML in react with JSX */}
            <h1>React JSX(JavaScript XML)</h1>

            {/* Get value from variable */}
            <h2>My Name is {mySelf.name}. And I am {mySelf.age} years old.</h2>

            {/* Style using variable */}
            <h2 style={styleAuthor}>Create by Wasek Bellah</h2>

            {/* Style by direct inline */}
            <p style={{ color: "blue", backgroundColor: "yellow", padding: "10px", fontWeight: "bold" }}>Sum of 5 and 6: {5 + 6}</p>
        </section>
    );
}
export default FirstCode;