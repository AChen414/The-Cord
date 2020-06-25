import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, login }) => {
    const demoLogin = (e) => {
        e.preventDefault();
        const demoUser = {
            email: 'demo@gmail.com',
            password: '123456'
        };
        login(demoUser);
    }

    return(
        <div className="front-page-container">
            <div className="front-page">
                <header className="front-page-header">
                    <span>Discord</span>
                    <Link to="/login" className="header-login">Login</Link>
                </header>
                <main className="front-page-description">
                    <h1>A new way to chat with your communities and friends</h1>
                    <p>Discord is the easiest way to communicate over voice, video, 
                    and text, whether you're part of a school club, a nightly gaming
                    group, a worldwide art community, or just a handful of friends 
                    that want to hang out.
                    </p>
                </main>
                <div className="front-page-buttons">
                    <Link to="/signup">Create an Account</Link>
                    <button 
                        className="front-page-demo-button"
                        onClick={(e) => demoLogin(e)}
                    >Demo Login</button>
                </div>
            </div>
        </div>
    )
}

export default Greeting;