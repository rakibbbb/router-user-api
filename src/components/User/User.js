import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    console.log(props.user);
    const user = props.user;
    const { name, email, id } = user;
    const userStyle = {
        border: '1px solid cyan',
        borderRadius: '10px',
        padding: "20px", 
        margin: "20px"
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <Link to={`/user/${id}`}>Show User Details of {id}</Link>
        </div>
    );
};

export default User;