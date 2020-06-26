import React from 'react';

const Footer = ({ currentUser, logout }) => {
    return(
        <div className="footer">
            <div className="footer-username">{currentUser.username}</div>
            <button className="footer-button" onClick={() => logout()}>Log Out</button>
        </div>
    )
};

export default Footer;