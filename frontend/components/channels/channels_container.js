import { connect } from 'react-redux';
import { fetchAllServerInfo } from '../../actions/server_actions';
import { fetchChannelMessages } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

import Channels from './channels';

const mSTP = (state, ownProps) => {
    return {
        serverId: ownProps.match.params.server_id,
        channelId: ownProps.match.params.channel_id,
        server: state.entities.servers[ownProps.match.params.server_id],
        channels: Object.values(state.entities.channels),
        users: Object.values(state.entities.users),
        currentUser: state.session.currentUser
    }
};

const mDTP = dispatch => {
    return {
        fetchAllServerInfo: (serverId) => dispatch(fetchAllServerInfo(serverId)),
        fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId))
    };
};

export default withRouter(connect(mSTP, mDTP)(Channels));