import React, { useEffect, useState } from 'react';
import User from '../User/User';


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
    return (
        <div>
            <h2>User Info</h2>
            {
            users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Home;