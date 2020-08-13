import React from 'react';
import Auth from './useAuth';

const UserDashboard = () => {
    const auth = Auth();

    return (
        <section className="flexCenter user">
            {auth.user ? <div className="userSignedIn">
                <div className="userInfo">
                    <h1>Welcome, Welcome, Welcome</h1>
                    {
                        auth.user.photo ?
                            <img src={auth.user.photo} alt={auth.user.name} style={{ width: "150px", borderRadius: "50%" }} /> :
                            auth.user.name && <p className="photoAlt">{auth.user.name.charAt(0)}</p>
                    }

                    {auth.user.name && <h2>Hay, {auth.user.name}</h2>}
                    {auth.user.email && <p><strong>Your E-mail:</strong> {auth.user.email}</p>}
                </div>
            </div> : <h2 className="red" style={{ fontSize: '35px' }}>No user signed in, please sign in!</h2>}
        </section>
    );
};

export default UserDashboard;