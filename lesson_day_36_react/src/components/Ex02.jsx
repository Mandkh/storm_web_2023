import React, { useState, useEffect } from 'react';

function Ex02() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();
            setUsers(data);
        }


        fetchUsers();

    })
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}





export default Ex02;