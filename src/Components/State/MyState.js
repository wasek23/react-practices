import React, { Component } from 'react';

class MyState extends Component {
    constructor() {
        super();

        this.state = {
            name: "Wasek Bellah",
            age: 21
        }
    }

    render() {
        return (
            <section className="flexCenter">
                <h2>My name: {this.state.name}</h2>
                <h2>I am {this.state.age} years old.</h2>
            </section>
        );
    }
}

export default MyState;