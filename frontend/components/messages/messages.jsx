import React, { useState, useEffect, useRef } from 'react';
import MessageForm from './message-form';
import Message from './message';

function Messages(props) {
    const [messages, setMessages] = useState([]);
    const messageBottom = useRef();
    useEffect(() => {
        // websocket subscription
        props.fetchAllServerInfo(props.serverId);
    }, [])

    useEffect(() => {
       messageBottom.current.scrollIntoView(); 
    }, [props.channelId]) 

    let currentChannel = props.channels[props.channelId];
    let channelId = props.channelId;
    let currentUser = props.currentUser;
    let channelName = currentChannel?.name;
    let messageComponents;

    if (currentChannel) {
        let channelMessages = props.messages.concat(messages).filter((message) => {
            return message.channel_id === currentChannel.id;
        })
        messageComponents = channelMessages.map((message, i) => {
            return <Message
                message={message}
                author={props.users[message.author_id]?.username}
                currentUser={props.currentUser}
                key={i}
            />
            // return (
            //     <div className='message' key={i}>
            //         <div className="message-user">{this.props.users[message.author_id]?.username}</div>
            //         <div className="message-body">{message.body}</div>
            //     </div>
            // )
        })
    }

    return(
        <div className="message-box">
            <div className="message-list">
                <div className="chat">
                    <div className="welcome">
                        <p id="channel-welcome">Welcome to #{channelName}!</p>
                        <p id="channel-welcome-start">This is the start of the #{channelName} channel. </p>
                    </div>

                    {messages}
                    <div ref={messageBottom}></div>
                </div>
                <MessageForm
                    currentUserId={currentUser?.id}
                    channel_id={channelId}
                    channelName={currentChannel?.name}
                    createMessage={props.createMessage}
                />
            </div>
        </div>
    )
}

export default Messages;