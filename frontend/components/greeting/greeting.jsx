import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser }) => {
    const sessionLink = () => (
        <nav className="login">
            Hi
            <Link to="/login">Login</Link>
        </nav>
    );

    if (!currentUser) return sessionLink;
}

export default Greeting;