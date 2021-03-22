import React, { useState } from 'react';

function AddChannelForm(props) {
    const [name, setName] = useState('');
    const [serverId, setServerId] = useState(props.serverId);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newChannel = { name, server_id: serverId };
        props.createChannel(newChannel).then(props.closeModal());
    }

    const handleNameInput = (field) => {
        return e => {
            setName(e.currentTarget.value);
        }
    }

    return(
        <div className="add-channel-form">
            <h1>CREATE TEXT CHANNEL</h1>
            <form onSubmit={handleSubmit}>
                <div className="channel-form-name">
                    <label>
                        <span>Channel Name</span>
                        <span className="channel-form-name-err">{ }</span>
                        <input
                            type="text"
                            className="channel-form-input"
                            value={name}
                            onChange={handleNameInput('name')}
                        />
                    </label>
                </div>
                <div className="form-bottom">
                    <div className="channel-form-back" onClick={() => props.closeModal()}>
                        <span>Cancel</span>
                    </div>
                    <button className="channel-form-submit">
                        Create Channel
                        </button>
                </div>
            </form>
        </div>
    )
}

export default AddChannelForm;