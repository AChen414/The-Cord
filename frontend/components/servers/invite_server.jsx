import React from 'react';

function InviteServer(props) {
    return (
        <div className="invite-server-modal">
            <h1 className="invite-server-title">Invite Friends to {props.server.name}</h1>
            <div className="invite-code-container">
                <label>
                    <span>Invite Code</span>
                    <input
                        type="text"
                        className="invite-code-input"
                        value={props.server.invite_code}
                        readOnly
                    />
                </label>
            </div>
        </div>
    )
}

export default InviteServer;