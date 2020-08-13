import React, { Component } from "react";
import axios from 'axios';
import API_PATH from './index.php';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    // Handle Change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    submitForm = e => {
        e.preventDefault();
        console.log(this.state);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        }).then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        }).catch(error => this.setState({ error: error.message }));
    }

    // // Submit
    // submitForm = e => {
    //     // console.log(this.state);
    //     // Create a new XMLHttpRequest
    //     let xhr = new XMLHttpRequest();

    //     // Get a callback when the server responds
    //     xhr.addEventListener('load', () => {
    //         // update the emailStatus with the respond
    //     });

    //     xhr.open('GET', '')

    //     // Send the request
    //     xhr.send();

    //     e.preventDefault();
    // }

    render() {
        const { name, email, subject, message } = this.state;

        return (
            <form onSubmit={this.submitForm} className="contactForm" action="/index.php">
                <div className="left">
                    <div className="formGroup">
                        <input type="text" className="formInput" id="name" placeholder="Full name" value={name} onChange={this.handleChange('name')} required />
                        <label className="formLabel" htmlFor="name">Full name</label>
                    </div> {/* Form Group */}

                    <div className="formGroup">
                        <input type="email" className="formInput" id="email" placeholder="Email address" value={email} onChange={this.handleChange('email')} required />
                        <label className="formLabel" htmlFor="email">Email address</label>
                    </div> {/* Form Group */}

                    <div className="formGroup">
                        <input type="text" className="formInput" id="subject" placeholder="Subject" value={subject} onChange={this.handleChange('subject')} required />
                        <label className="formLabel" htmlFor="subject">Subject</label>
                    </div> {/* Form Group */}
                </div> {/* Left */}

                <div className="right">
                    <div className="formGroup">
                        <textarea className="formInput" name="message" id="message"
                            placeholder="Message" value={message} onChange={this.handleChange('message')}></textarea>
                        <label className="formLabel" htmlFor="message">Message</label>
                    </div> {/* Form Group */}

                    <div className="formGroup submit_btn">
                        <input type="submit" className="btn btn-primary" value="Send Message &rarr;" />
                    </div> {/* Form Group */}
                </div> {/* Right */}
                {this.state.mailSent &&
                    <div>Thank you for contacting us.</div>
                }
            </form> // Contact Form
        );
    }
};

export default Form;