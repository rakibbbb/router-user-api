import React from 'react';

const NoMatch = () => {
    const notFoundStyle = {
        margin : "auto",
        width : "30%",
        textAlign : "center",
        padding : "10% 0"
    }
    return (
        <div style={notFoundStyle}>
            <h1>404</h1>
            <h1>Content not found</h1>
        </div>
    );
};

export default NoMatch;