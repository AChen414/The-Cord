import React from 'react';
import MessageForm from './message-form';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    };

    componentDidMount() {
        this.props.fetchAllServerInfo(this.props.serverId);
        console.log(this.props.channelId)
        this.props.fetchChannelMessages(this.props.channelId);
    }

    render() {
        let currentChannel = this.props.channels[this.props.channelId];
        let currentUser = this.props.currentUser;
        let channelName = currentChannel?.name;
        let messages;

        if (currentChannel) {
            let channelMessages = this.props.messages.concat(this.state.messages).filter((message) => {
                return message.channel_id === currentChannel.id;
            })
            messages = channelMessages.map((message, i) => {
                return (
                    <div className='message' key={i}>
                        <div className="message-user">{this.props.users[message.author_id]?.username}</div>
                        <div className="message-body">{message.body}</div>
                    </div>
                )
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
                    </div>
                    <MessageForm 
                        currentUserId={currentUser?.id} 
                        channel_id={this.props.channelId} 
                        channelName={currentChannel?.name} 
                        createMessage={this.props.createMessage}
                    />
                </div>
            </div>
        )
    };
};

export default Messages;