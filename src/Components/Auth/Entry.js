import React, { useState } from 'react';
import './Auth.css';
import GoogleLogo from './img/google.svg';
// import FacebookLogo from './img/facebook.png';
import TwitterLogo from './img/twitter.svg';
import GithubLogo from './img/github.svg';
import YahooLogo from './img/yahoo.svg';
import MicrosoftLogo from './img/microsoft.svg';
// import PhoneLogo from './img/phone.svg';

import { useAuth } from './useAuth';

const Entry = () => {
    const auth = useAuth();

    const [user, setUser] = useState({ name: '', email: '', password: '', phone: '', isValid: false, error: '' });

    // Input check
    const isValidName = email => /^[a-zA-Z ]{2,30}$/.test(email);
    const isValidEmail = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const isValidPassword = pass => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(pass);

    // Input Change
    const inputChange = e => {
        const newUser = { ...user }

        // Validation
        let isValid = true;
        if (e.target.name === "name") {
            isValid = isValidName(e.target.value);

            if (!isValidName(e.target.value)) {
                newUser.error = "Name should have contains only letters and at least 2 to up to 30 letters.";
            } else {
                newUser.error = "";
            }
        }
        if (e.target.name === "email") {
            isValid = isValidEmail(e.target.value);

            if (!isValidEmail(e.target.value)) {
                newUser.error = "Invalid Email formate.";
            } else {
                newUser.error = "";
            }
        }
        if (e.target.name === "password") {
            isValid = isValidPassword(e.target.value);

            if (!isValidPassword(e.target.value)) {
                newUser.error = "Password should have contained 1 uppercase and lowercase letter, 1 number, 1 special character and at least 8 to up to 30 characters.";
            } else {
                newUser.error = "";
            }
        }
        if (e.target.name === "confirmPassword") {
            let password = document.getElementById("password").value;

            if (password !== e.target.value) {
                newUser.error = "Password did not match";
                isValid = false;
            } else {
                newUser.error = "";
                isValid = true;
            }
        }

        newUser[e.target.name] = e.target.value;
        newUser.isValid = isValid;
        setUser(newUser);
    }

    // Register Account
    const registerAccount = e => {
        if (user.isValid) {
            auth.createUserWithEmail(user.name, user.email, user.password).then(res => {
                if (res.email) window.location.pathname = '/auth/user-dashboard';
            });
        } else {
            const formValid = { ...user }
            formValid.error = 'Form is not valid';
            setUser(formValid);
        }
        e.preventDefault();
        e.target.reset();
    }

    // Sign In User
    const signInUser = e => {
        auth.signInWithEmail(user.email, user.password).then(res => {
            if (res.email) window.location.pathname = '/auth/user-dashboard';
        });

        e.preventDefault();
        e.target.reset();
    }

    // Google Sign In
    const googleSignIn = () => {
        auth.signInWithGoogle().then(res => {
            if (res.email) window.location.pathname = '/auth/user-dashboard';
        });
    }

    // Facebook Sign In
    // const facebookSignIn = () => {
    //     auth.signInWithFacebook().then(res => {
    //         window.location.pathname = '/auth/user-dashboard';
    //     });
    // }

    // Twitter Sign In
    const twitterSignIn = () => {
        auth.signInWithTwitter().then(res => {
            if (res.displayName) window.location.pathname = '/auth/user-dashboard';
        });
    }

    // Github Sign In
    const githubSignIn = () => {
        auth.signInWithGithub().then(res => {
            if (res.displayName) window.location.pathname = '/auth/user-dashboard';
        });
    }

    // Yahoo Sign In
    const yahooSignIn = () => {
        auth.signInWithYahoo().then(res => {
            if (res.email) window.location.pathname = '/auth/user-dashboard';
        });
    }

    // Microsoft Sign In
    const microsoftSignIn = () => {
        auth.signInWithMicrosoft().then(res => {
            if (res.displayName) window.location.pathname = '/auth/user-dashboard';
        });
    }

    // Phone Sign In
    const phoneSignIn = e => {
        auth.signInWithPhone(user.phone).then(res => {
            if (res) window.location.pathname = '/auth/user-dashboard';
        });

        e.preventDefault();
        e.target.reset();
    }

    // Sign Out
    const signOut = () => {
        auth.signOut().then(res => {
            window.location.pathname = '/auth/home';
        });
    }

    // Form Toggle
    const [formType, setFormType] = useState('registration');
    const signInForm = () => {
        setFormType('sign in');
    }
    // const signInPhone = () => {
    //     setFormType('sign in phone');
    // }
    const registerForm = () => {
        setFormType('registration');
    }

    return (
        <section className="flexCenter user">
            {
                auth.user ?
                    <div className="userSignedIn">
                        <button className="btn" onClick={signOut}>Sign out</button>

                        <div className="userInfo">
                            {
                                auth.user.photo ?
                                    <img src={auth.user.photo} alt={auth.user.name} style={{ width: "150px", borderRadius: "50%" }} /> :
                                    auth.user.name && <p className="photoAlt">{auth.user.name.charAt(0)}</p>
                            }

                            {auth.user.name && <h2>Welcome, {auth.user.name}</h2>}
                            {auth.user.email && <p><strong>Your E-mail:</strong> {auth.user.email}</p>}
                        </div>
                    </div> :

                    <div className="signArea" id="signArea">
                        <div className="signInWith">
                            <h3>Sign in with: </h3>
                            <button onClick={googleSignIn} className="btnImg"><img src={GoogleLogo} alt="Google" /></button>
                            {/* <button onClick={facebookSignIn} className="btnImg"><img src={FacebookLogo} alt="Facebook" /></button> */}
                            <button onClick={twitterSignIn} className="btnImg"><img src={TwitterLogo} alt="Twitter" /></button>
                            <button onClick={githubSignIn} className="btnImg"><img src={GithubLogo} alt="Github" /></button>
                            <button onClick={yahooSignIn} className="btnImg"><img src={YahooLogo} alt="Yahoo" /></button>
                            <button onClick={microsoftSignIn} className="btnImg"><img src={MicrosoftLogo} alt="Microsoft" /></button>
                            {/* <button onClick={signInPhone} className="btnImg"><img src={PhoneLogo} alt="Phone" /></button> */}
                        </div>

                        <form style={{ display: formType === 'registration' ? "block" : "none" }} onSubmit={registerAccount}>
                            <p className="green formText" onClick={signInForm}>Already have an account? Sign In</p>

                            <h2>Register an account</h2>

                            <input type="text" name="name" onBlur={inputChange} className="input" placeholder="Enter your name" required />
                            <input type="email" name="email" onBlur={inputChange} className="input" placeholder="Enter your email" required />
                            <input type="password" name="password" onBlur={inputChange} className="input" placeholder="Enter your password" id="password" required />
                            <input type="password" name="confirmPassword" onBlur={inputChange} className="input" placeholder="Confirm password" required />
                            <input type="submit" value="Register" className="btn submit" />
                        </form>

                        <form style={{ display: formType === 'sign in' ? "block" : "none" }} onSubmit={signInUser}>
                            <p className="red formText" onClick={registerForm}>Not have an account? Register an account</p>

                            <h2>Sign In</h2>

                            <input type="email" name="email" onBlur={inputChange} className="input" placeholder="Enter your email" required />
                            <input type="password" name="password" onBlur={inputChange} className="input" placeholder="Enter your password" required />
                            <input type="submit" value="Sign In" className="btn submit" />
                        </form>

                        <form style={{ display: formType === 'sign in phone' ? "block" : "none" }} onSubmit={phoneSignIn}>
                            <p className="red formText" onClick={registerForm}>Want to register with email?</p>

                            <h2>Sign In With Phone</h2>

                            <input type="text" name="phone" onBlur={inputChange} className="input" placeholder="Enter your phone number with country code" required />
                            <input type="submit" value="Sent OTP &rarr;" className="btn submit" />
                        </form>

                        <div className="alert">
                            {/* <p id="successMessage">{user.success}</p> */}
                            <p id="errorMessage">{auth.error}</p>
                            <p id="errorMessage">{user.error}</p>
                        </div>
                    </div>
            }
        </section>
    );
};

export default Entry;