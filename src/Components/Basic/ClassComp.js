import React, { Component } from 'react';

class ClassComp extends Component {
    classClick(msg) {
        alert(msg);
    }

    render() {
        return (
            <section className="flexCenter">
                <h1>My First Class Component</h1>
                <button onClick={this.classClick.bind(this, "Button Clicked form Class Component")} className="button">Class Button</button>
            </section>
        );
    }
}
export default ClassComp;