import React, { useState, useEffect, useContext } from 'react';

function MessageForm(props) {
    const [body, setBody] = useState('');
    const [authorId, setAuthorId] = useState(props.currentUserId);
    const [channelId, setChannelId] = useState(null);
    const darkTheme = useContext()

    useEffect(() => { // on mount
        setChannelId(props.channel_id);
    }, [])

    useEffect(() => {
        setChannelId(props.channel_id);
    }, [channelID])

    const handleBodyChange = (type) => {
        return e => {
            setBody(e.currentTarget.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = { body, channelId, authorId };
        if (message.body.length) {
            props.createMessage(message);
        }
        setBody('');
    }

    return (
        <div className='message-form'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleBodyChange('body')}
                    value={body}
                    className="message-form-body"
                    placeholder={'Message #' + props.channelName}
                />
                <input type="submit" className="message-form-input" />
            </form>
        </div>
    )
}

export default MessageForm;