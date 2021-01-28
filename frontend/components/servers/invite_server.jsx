import React from 'react';

class InviteServer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="invite-server-modal">
                <h1 className="invite-server-title">Invite Friends to {this.props.server.name}</h1>
                <div className="invite-code-container">
                    <label>
                        <span>Invite Code</span>
                        <input 
                            type="text"
                            className="invite-code-input"
                            value={this.props.server.invite_code}
                            readOnly
                        />
                    </label>
                </div>
            </div>
        )
    }
}

export default InviteServer;