import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';

import FirstCode from './Components/Basic/FirstCode';
import FunctionComp from './Components/Basic/FunctionComp';
import ClassComp from './Components/Basic/ClassComp';

import FunctionPerson from './Components/Props/FunctionPerson';
import ClassPerson from './Components/Props/ClassPerson';
import Products from './Components/Props/Products';

import Counter from './Components/State/Counter';
import Users from './Components/State/Users';
import MyState from './Components/State/MyState';

import Recharts from './Components/Charts/Recharts';

import StateShare from './Components/ContextAPI/StateShare';

import ReducerCount from './Components/Reducer/ReducerCount/ReducerCount';
import PatientManagement from './Components/Reducer/PatientManagement/PatientManagement';

// import ContactForm from './Components/Contact/ContactForm';
// import Form from './Components/Contact/Form';

// import AuthHome from './Components/Auth/AuthHome';
// import Entry from './Components/Auth/Entry';
// import UserDashboard from './Components/Auth/UserDashboard';
// import Account from './Components/Auth/Account';
// import { AuthContextProvider, PrivateRoute } from './Components/Auth/useAuth';

function App() {
    return (
        // <AuthContextProvider>
        <Router>
            <Header />

            <main id="mainPage">
                <Switch>
                    <Route path='/basic/first-code'>
                        <FirstCode />
                    </Route>
                    <Route path='/basic/functional-component'>
                        <FunctionComp />
                    </Route>
                    <Route path='/basic/class-component'>
                        <ClassComp />
                    </Route>

                    <Route path='/props/functional-person'>
                        <FunctionPerson name="Wasek Bellah" age="21" color="blue" />
                    </Route>
                    <Route path='/props/class-person'>
                        <ClassPerson name="Wasek Bellah" age="21" color="blue" />
                    </Route>
                    <Route path='/props/products'>
                        <Products />
                    </Route>

                    <Route path='/state/counter'>
                        <Counter />
                    </Route>
                    <Route path='/state/user'>
                        <Users />
                    </Route>
                    <Route path='/state/my-state'>
                        <MyState />
                    </Route>

                    <Route path='/recharts'>
                        <Recharts />
                    </Route>
                    <Route path='/state-share'>
                        <StateShare />
                    </Route>

                    <Route path='/reducer/reducer-count'>
                        <ReducerCount />
                    </Route>
                    <Route path='/reducer/patient-management'>
                        <PatientManagement />
                    </Route>

                    <Route path='contact'>
                        {/* <ContactForm />
                        <Form /> */}
                    </Route>

                    {/* <Route path='/auth/home'>
                            <AuthHome />
                        </Route>
                        <Route path='/auth/entry'>
                            <Entry />
                        </Route>
                        <Route path='/auth/user-dashboard'>
                            <UserDashboard />
                        </Route>
                        <PrivateRoute path='/auth/account'>
                            <Account />
                        </PrivateRoute> */}

                    <Route path='/'>
                        <section className="flexCenter">
                            <h1 style={{ fontSize: '65px' }}>Welcome<br />to React Practices</h1>
                        </section>
                    </Route>
                </Switch>
            </main>
        </Router>
        // </AuthContextProvider>
    );
}

export default App;
