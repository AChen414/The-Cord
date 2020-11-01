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
                    <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/Discord_logo.svg" />
                    <div className="front-page-right">
                        <a href="https://www.linkedin.com/in/andrew-chen-787534171/">
                            <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/linkedIn.png" className="linkedin" />
                        </a>

                        <a href="https://www.github.com/AChen414">
                            <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/github.png" className="github" />
                        </a>
                        <Link to="/login" className="header-login">Login</Link>
                    </div>
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
                <div className="splash-images">
                    <img className="android" src={window.android}/>
                    <img className="iphone" src={window.iphone}/>
                    <img className="controller" src={window.controller}/>
                    <img className="desktop" src={window.desktop}/>
                    <img className="laptop" src={window.laptop}/>
                    <img className="potion" src={window.potion}/>
                    <img className="disc" src={window.disc}/>
                    <img className="headphones" src={window.headphones}/>
                    <img className="box" src={window.box}/>
                    <img className="gamepak floating1" src={window.gamepak}/>
                    <img className="bomb floating2" src={window.bomb}/>
                    <img className="coin1 floating1" src={window.coin}/>
                    <img className="coin2 floating1" src={window.coin}/>
                    <img className="triangle1" src={window.triangle}/>
                    <img className="triangle2" src={window.triangle}/>
                    <img className="triangle3" src={window.triangle}/>
                    <img className="circle1" src={window.circle}/>
                    <img className="circle2" src={window.circle}/>
                    <img className="circle3" src={window.circle}/>
                    <img className="circle4" src={window.circle}/>
                    <img className="circlefill1" src={window.circle}/>
                    <img className="circlefill2" src={window.circle}/>
                    <img className="circlefill3" src={window.circle}/>
                    <img className="circlefill4" src={window.circle}/>
                    <img className="circlefill5" src={window.circle}/>
                    <img className="square1" src={window.square}/>
                    <img className="square2" src={window.square}/>
                    <img className="square3" src={window.square}/>
                    <img className="x-image1" src={window.x}/>
                    <img className="x-image2" src={window.x}/>
                </div>
            </div>
        </div>
    )
}

export default Greeting;