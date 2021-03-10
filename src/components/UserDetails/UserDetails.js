import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    let { userId } = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    const { name, email, phone, website } = user;
    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;