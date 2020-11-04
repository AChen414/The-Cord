import React from 'react';

class InviteServer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="invite-server-modal">
                <h1 className="invite-server-title">Invite Friends to </h1>
                <h2 clasName="invite-code-title">Invite Code</h2>
                <div className="invite-code-container">
                    <p className="invite-code"></p>
                </div>
                <div className="form-bottom">
                    <button onClick={() => this.props.closeModal()}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default InviteServer;