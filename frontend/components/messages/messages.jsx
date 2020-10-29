import React from 'react';
import MessageForm from './message-form';
import Message from './message';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        this.ref = React.createRef();
    };

    componentDidMount() {
        console.log('messages mounted')
        let channelId = this.props.channelId;
        // App.cable.subscriptions.create(
        //     { channel: "ChatChannel", channel_id: channelId },
        //     {
        //         received: message => {
        //             this.props.createMessage(message)
        //         },
        //         speak: message => {
        //             return this.perform('speak', message)
        //         }
        //     }
        // )
        this.props.fetchAllServerInfo(this.props.serverId);
        console.log(this.props.channelId)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('messages updated')
        this.ref.current.scrollIntoView();
    }

    render() {
        console.log('messages rendered')
        console.log(this.props.channelId)
        let currentChannel = this.props.channels[this.props.channelId];
        let channelId = this.props.channelId;
        let currentUser = this.props.currentUser;
        let channelName = currentChannel?.name;
        let messages;

        if (currentChannel) {
            let channelMessages = this.props.messages.concat(this.state.messages).filter((message) => {
                return message.channel_id === currentChannel.id;
            })
            messages = channelMessages.map((message, i) => {
                return <Message 
                    message={message} 
                    author={this.props.users[message.author_id]?.username}
                    currentUser={this.props.currentUser}    
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
                        <div ref={this.ref}></div>
                    </div>
                    <MessageForm 
                        currentUserId={currentUser?.id} 
                        channel_id={channelId} 
                        channelName={currentChannel?.name} 
                        createMessage={this.props.createMessage}
                    />
                </div>
            </div>
        )
    };
};

export default Messages;