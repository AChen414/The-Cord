import React, { useState, useEffect } from 'react';

function EditChannelForm(props) {
    const [name, setName] = useState('');
    const [serverId, setServerId] = useState(null);
    const [id, setId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedChannel = { name, server_id: serverId, id};
        props.editChannel(updatedChannel);
        props.closeModal();
    }

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(props.channelId);
        props.deleteChannel(props.channelId).then(props.closeModal());
    }

    const handleNameInput = (field) => {
        return e => {
            setName(e.currentTarget.value);
        }
    }

    useEffect(() => {
        if (props.channel) {
            setName(props.channel.name);
            setServerId(props.serverId);
            setId(props.channelId);
        }
    }, [])

    return(
        <div className="edit-channel-form">
            <h1>EDIT TEXT CHANNEL</h1>
            <h2 onClick={() => props.closeModal()}>X</h2>
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
                    <div className="channel-form-back">
                        {/* <span
                            className="channel-form-delete"
                            onClick={handleDelete}
                        >
                            Delete Channel
                            </span> */}
                    </div>
                    <button className="channel-form-submit">
                        Update Channel
                        </button>
                </div>
            </form>
        </div>
    )
}

export default EditChannelForm;