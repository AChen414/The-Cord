import { connect } from 'react-redux';
import { fetchAllServerInfo } from '../../actions/server_actions';
import { fetchChannelMessages } from '../../actions/channel_actions';
import { createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

import Messages from './messages';

const mSTP = (state, ownProps) => {
    let messages;
    if (state.entities.messages) {
        messages = Object.values(state.entities.messages);
    }
    if (state.entities.users) {

    }
    return {
        channelId: ownProps.match.params.channel_id,
        serverId: ownProps.match.params.server_id,
        channels: state.entities.channels,
        currentUser: state.session.currentUser,
        users: state.entities.users,
        messages: messages
    };
};

const mDTP = dispatch => {
    return {
        fetchAllServerInfo: (serverId) => dispatch(fetchAllServerInfo(serverId)),
        fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
        createMessage: (message) => dispatch(createMessage(message))
    };
};

export default withRouter(connect(mSTP, mDTP)(Messages));