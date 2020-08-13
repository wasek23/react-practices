import React from 'react';

function FunctionPerson(props) {
    let style = {
        backgroundColor: props.color,
        padding: "0 10px"
    }
    return (
        <section className="flexCenter">
            <div style={{ padding: "10px 30px", margin: "10px 0", border: "1px solid orangered" }}>
                <h3>Function Props</h3>
                <h2>Name: {props.name}</h2>
                <h3>Age: {props.age} years old.</h3>
                <h4>Favorite color: <span style={style}>{props.color}</span></h4>
            </div>
        </section>
    );
}
export default FunctionPerson;