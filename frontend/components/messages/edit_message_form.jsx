import React, { useState, useEffect } from 'react';

function EditMessageForm(props) {
    const [id, setId] = useState(null);
    const [body, setBody] = useState('');
    const [authorId, setAuthorId] = useState(null);
    const [channelId, setChannelId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMessage = { body, id, author_id: authorId, channel_id: channelId };
        props.editMessage(updatedMessage).then(props.closeModal());
    }

    const handleDelete = (e) => {
        props.deleteMessage(props.messageId.id);
        props.closeModal();
    }

    const handleBodyInput = (field) => {
        return e => {
            setBody(e.currentTarget.value);
        }
    }

    useEffect(() => {
        let currentMessage = props.messages[props.messageId.id];
        setBody(currentMessage.body);
        setAuthorId(props.author.id);
        setChannelId(currentMessage.channel_id);
        setId(currentMessage.id);
    }, [])

    return (
        <div className="edit-message-form">
            <h1>Edit Message</h1>
            <h2 onClick={() => props.closeModal()}>X</h2>
            <form onSubmit={handleSubmit}>
                <div className="message-form-edit">
                    <label>
                        <span>Message</span>
                        <span className="message-form-message-err">{ }</span>
                        <input
                            type="text"
                            className="edit-message-form-input"
                            value={body}
                            onChange={handleBodyInput('body')}
                        />
                    </label>
                </div>
                <div className="form-bottom">
                    <div className="channel-form-back">
                        <span
                            className="channel-form-delete"
                            onClick={handleDelete}
                        >
                            Delete Message
                            </span>
                    </div>
                    <button className="channel-form-submit">Update Message</button>
                </div>
            </form>
        </div>
    )
}

export default EditMessageForm;