import React, { Component } from 'react';


class ClassPerson extends Component {


    render() {
        let style = {
            backgroundColor: this.props.color,
            padding: "0 10px"
        };
        return (
            <section className="flexCenter">
                <div style={{ padding: "10px 30px", margin: "10px 0", border: "1px solid orangered" }}>
                    <h3>Class Props</h3>
                    <h2>Name: {this.props.name}</h2>
                    <h3>Age: {this.props.age} years old.</h3>
                    <h4>Favorite color: <span style={style}>{this.props.color}</span></h4>
                </div>
            </section>
        );

    }
}
export default ClassPerson;