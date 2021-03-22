import React from 'react';
import { openModal } from '../../actions/modal_actions';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let editMessage;
        let messageId = { id: this.props.message.id }
        if (this.props.currentUser.id === this.props.message.author_id) {
            editMessage =
                <div className="edit-message" onClick={() => dispatch(openModal('Edit Message', messageId))}>
                    <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/cog.png" />
                </div>
        }
        return (
            <div className="message">
                <div className="message-user">{this.props.author}</div>
                <div className="message-body">{this.props.message.body}</div>

                {editMessage}
            </div>
        )
    }
}

// function Message(props) {
//     // props = { message, author, currentUser }

//     let editMessage;
//     let messageId = { id: props.message.id };
//     if (props.currentUser.id === this.props.message.author_id) {
//         editMessage = 
//             <div className="edit-message" onClick={() => dispatch(openModal('Edit Message', messageId))}>
//                 <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/cog.png"/>
//             </div>
//     }

//     return(
//         <div className="message">
//             <div className="message-user">{props.author}</div>
//             <div className="message-body">{props.message.body}</div>

//             {editMessage}
//         </div>
//     )
// }

export default Message;