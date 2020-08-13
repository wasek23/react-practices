import React from 'react';
import './Header.css';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header'>
            <div className='container'>
                <h2 className='logo'><Link><NavLink to='/'>React Practices</NavLink></Link></h2>

                <nav>
                    <ul>
                        <li className='menu-item-has-children'><NavLink to='/basic' activeClassName='active'>Basic</NavLink>
                            <ul>
                                <li><NavLink to='/basic/first-code' activeClassName='active'>First Code</NavLink></li>
                                <li><NavLink to='/basic/functional-component' activeClassName='active'>Functional Component</NavLink></li>
                                <li><NavLink to='/basic/class-component' activeClassName='active'>Class Component</NavLink></li>
                            </ul>
                        </li>

                        <li className='menu-item-has-children'><NavLink to='/props' activeClassName='active'>Props</NavLink>
                            <ul>
                                <li><NavLink to='/props/functional-person' activeClassName='active'>Functional Person</NavLink></li>
                                <li><NavLink to='/props/class-person' activeClassName='active'>Class Person</NavLink></li>
                                <li><NavLink to='/props/products' activeClassName='active'>Products</NavLink></li>
                            </ul>
                        </li>

                        <li className='menu-item-has-children'><NavLink to='/state' activeClassName='active'>State</NavLink>
                            <ul>
                                <li><NavLink to='/state/counter' activeClassName='active'>Counter</NavLink></li>
                                <li><NavLink to='/state/user' activeClassName='active'>User</NavLink></li>
                                <li><NavLink to='/state/my-state' activeClassName='active'>My State</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to='/recharts' activeClassName='active'>Recharts</NavLink></li>
                        <li><NavLink to='/state-share' activeClassName='active'>State Share</NavLink></li>

                        <li className='menu-item-has-children'><NavLink to='/reducer' activeClassName='active'>Reducer</NavLink>
                            <ul>
                                <li><NavLink to='/reducer/reducer-count' activeClassName='active'>Reducer Count</NavLink></li>
                                <li><NavLink to='/reducer/patient-management' activeClassName='active'>Patient Management</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to='/contact' activeClassName='active'>Contact</NavLink></li>

                        <li className='menu-item-has-children'><NavLink to='/auth' activeClassName='active'>Auth</NavLink>
                            <ul>
                                <li><NavLink to='/auth/home' activeClassName='active'>Home</NavLink></li>
                                <li><NavLink to='/auth/entry' activeClassName='active'>Entry</NavLink></li>
                                <li><NavLink to='/auth/user-dashboard' activeClassName='active'>User Dashboard</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;