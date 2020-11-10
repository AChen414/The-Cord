import React from 'react';

class JoinServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invite_code: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const serverInviteCode = { invite_code: this.state.invite_code };
        console.log(serverInviteCode, 'invite code before submit')
        this.props.joinServer(serverInviteCode).then(() => this.props.closeModal());
    }

    render() {
        return(
            <div className="join-server-form">
                <h1>JOIN A SERVER</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="server-form-code">
                        <label>
                            <span>Invite Code</span>
                            <span className="server-form-code-error">{}</span>
                            <input 
                                type="text"
                                className="server-form-code-input"
                                onChange={this.handleInput('invite_code')}
                            />
                        </label>
                    </div>
                    <div className="form-bottom">
                        <div className="server-form-back" onClick={() => this.props.closeModal()}>
                            <span>Cancel</span>
                        </div>
                        <button className="server-form-submit">
                            Join Server
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default JoinServerForm;