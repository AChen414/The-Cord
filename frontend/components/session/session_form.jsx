import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    handleDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, { email: 'demo@gmail.com', password: '123456'});
        this.props.processForm(demoUser);
    }

    handleErrors() {
        return this.props.errors.map ((errors) => errors);
    };

    render() {
        const urlAddress = this.props.formType === "Create an account" ? '/login' : '/signup';
        const linkDescription = this.props.formType === "Create an account" ? 'Already have an account?' : 'Register';
        const subMessage = this.props.formType !== 'Create an account' ? "We're so excited to see you again!" : '';
        const errorsArr = this.handleErrors();
        let emailError;
        let usernameError;
        let passwordError;
        errorsArr.forEach( (error, i) => {
            if (error.includes('Email') || error.includes('email')) {
                emailError = errorsArr[i];
            } else if (error.includes('Username') || error.includes('sername')) {
                usernameError = errorsArr[i];
            } else if (error.includes('Password') || error.includes('password')) {
                passwordError = errorsArr[i];
            }})

        return(
            <div className="session-form">
                <h1 className="form-type">{this.props.formType}</h1>
                <h2 className="form-submessage">{subMessage}</h2>

                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label className="form-type-field">
                        <span>Email</span>
                        <span>{emailError}</span>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            className="form-input"
                        />
                    </label>

                    {this.props.formType === "Create an account" ? (
                        <label className="form-type-field">
                            <span>Username</span>
                            <span>{usernameError}</span>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                className="form-input"
                                />
                        </label>
                        ) : ''
                    }

                    <label className="form-type-field">
                        <span>Password</span>
                        <span>{passwordError}</span>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            className="form-input"
                        />
                    </label>

                    <button className="form-submit">
                        {this.props.formType === 'Create an account' ? 'Continue' : 'Login'}
                    </button>
                    {this.props.formType === 'Create an account' ? '' : (
                        <button className="form-submit" onClick={this.handleDemo}>
                            Demo Login
                        </button>
                    )}
                    {this.props.formType === 'Create an account' ? ('') : (
                        <label className="alt-form-type">Need an account?</label>
                    )}
                    <Link to={urlAddress}>{linkDescription}</Link>
                </form>
            </div>
        )
    };
};

export default SessionForm;