import React from 'react';

class InviteServer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        currentServer = this.props.servers[this.props.serverId]
        return(
            <div className="invite-server-modal">
                <h1 className="invite-server-title">Invite Friends to {currentServer?.name}</h1>
                <div className="invite-code-container">
                    <label>
                        <span>Invite Code</span>
                        <input 
                            type="text"
                            className="invite-code-input"
                            value={currentServer.invite_code}
                            readOnly
                        />
                    </label>
                </div>
            </div>
        )
    }
}

export default InviteServer;