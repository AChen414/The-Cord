import React from 'react';
import MessageForm from './message-form';

class Messages extends React.Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        this.props.fetchAllServerInfo(this.props.serverId);
    }

    render() {
        console.log(this.props);
        const { channelId, channels } = this.props;
        console.log(channels)
        console.log(channelId)
        return(
            <div className="message-box">
                <div className="message-list">
                    <div className="chat">

                        <div className="welcome">
                            <p id="channel-welcome">Welcome to #{} !</p>
                            <p id="channel-welcome-start">This is the start of the channel. </p>
                        </div>

                    </div>
                    <MessageForm />
                </div>
            </div>
        )
    };
};

export default Messages;