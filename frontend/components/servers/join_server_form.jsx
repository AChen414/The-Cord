import React, { useState } from 'react';

function JoinServerForm(props) {
    const [inviteCode, setInviteCode] = useState('');

    const handleInput = (field) => {
        return e => {
            setInviteCode(e.currentTarget.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const serverInviteCode = { invite_code: inviteCode };
        props.joinServer(serverInviteCode).then(() => props.closeModal());
    }

    return (
        <div className="join-server-form">
            <h1>JOIN A SERVER</h1>
            <form onSubmit={handleSubmit}>
                <div className="server-form-code">
                    <label>
                        <span>Invite Code</span>
                        <span className="server-form-code-error">{ }</span>
                        <input
                            type="text"
                            className="server-form-code-input"
                            onChange={handleInput('invite_code')}
                        />
                    </label>
                </div>
                <div className="form-bottom">
                    <div className="server-form-back" onClick={() => props.closeModal()}>
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

export default JoinServerForm;