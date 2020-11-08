import React from 'react';

class InviteServer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="invite-server-modal">
                <h1 className="invite-server-title">Invite Friends to </h1>
                <div className="invite-code-container">
                    <label>
                        <span>Invite Code</span>
                        <input 
                            type="text"
                            className="invite-code-input"
                            value="123123"
                            readOnly
                        />
                    </label>
                </div>
            </div>
        )
    }
}

export default InviteServer;