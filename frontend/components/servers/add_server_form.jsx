import React, { useState } from 'react';

function AddServerForm(props) {
    const [name, setName] = useState(`${props.currentUser.username}\'s Server`);
    const [ownerId, setOwnerId] = useState(props.currentUser.id);
    const [inviteCode, setInviteCode] = useState(Math.random().toString(32).toUpperCase().slice(5));

    const serverAbbreviation = (serverName) => {
        let abbreviated = '';
        let serverNameArr = serverName.split(' ');
        serverNameArr.forEach(name => abbreviated += name[0]);
        return abbreviated;
    }

    const handleNameInput = (field) => {
        return e => {
            setName(e.currentTarget.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newServer = { name, owner_id: ownerId, invite_code: inviteCode };
        props.createServer(newServer).then(() => props.closeModal());
    }

    return (
        <div className="add-server-form">
            <h1>CREATE YOUR SERVER</h1>
            <p>By creating a server, you will have access to free text chat to use amongst your friends</p>
            <form onSubmit={handleSubmit}>
                <div className="server-form-name">
                    <label>
                        <span>SERVER NAME</span>
                        <span className="server-form-name-error">{ }</span>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameInput('name')}
                            className="server-form-input"
                        />
                    </label>
                </div>
                <div className="form-bottom">
                    <div className="server-form-back" onClick={() => props.closeModal()}>
                        BACK
                        </div>
                    <button className="server-form-submit">
                        Create
                        </button>
                </div>
            </form>
        </div>  
    )
}

export default AddServerForm;