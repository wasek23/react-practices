import React, { useState, useEffect } from 'react';

// Style
let tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginBottom: "30px"
}
let tableCell = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "10px"
}
let tableHeadCell = {
    border: "1px solid #dddddd",
    textAlign: "center",
    padding: "10px"
}

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUsers(data));
    }, []);

    return (
        <section className="flexCenter">
            <h2>Dynamic Users from server</h2>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={tableHeadCell}>Name</th>
                        <th style={tableHeadCell}>E-mail</th>
                        <th style={tableHeadCell}>Website</th>
                        <th style={tableHeadCell}>Company</th>
                        <th style={tableHeadCell}>City</th>
                        <th style={tableHeadCell}>Zip Code</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => <tr>
                        <td style={tableCell}>{user.name}</td>
                        <td style={tableCell}>{user.email}</td>
                        <td style={tableCell}>{user.website}</td>
                        <td style={tableCell}>{user.company.name}</td>
                        <td style={tableCell}>{user.address.city}</td>
                        <td style={tableCell}>{user.address.zipcode}</td>
                    </tr>)}
                </tbody>

                <tfoot>
                    <tr>
                        <th style={tableCell} colspan="4">Total Users: </th>
                        <th style={tableCell} colspan="2">{users.length}</th>
                    </tr>
                </tfoot>
            </table>
        </section>
    );
}
export default Users;