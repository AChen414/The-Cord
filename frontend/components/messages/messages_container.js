import { connect } from 'react-redux';
import { fetchAllServerInfo } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';

import Messages from './messages';

const mSTP = (state, ownProps) => {
    return {
        channelId: ownProps.match.params.channel_id,
        serverId: ownProps.match.params.server_id,
        channels: state.entities.channels
    };
};

const mDTP = dispatch => {
    return {
        fetchAllServerInfo: (serverId) => dispatch(fetchAllServerInfo(serverId))
    };
};

export default withRouter(connect(mSTP, mDTP)(Messages));