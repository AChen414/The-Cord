import { connect } from 'react-redux';
import { fetchAllServerInfo } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';

import Channels from './channels';

const mSTP = (state, ownProps) => {
    return {
        serverId: ownProps.match.params.server_id,
        server: state.entities.servers[ownProps.match.params.server_id],
        channels: Object.values(state.entities.channels),
        users: Object.values(state.entities.users)
    }
};

const mDTP = dispatch => {
    return {
        fetchAllServerInfo: (serverId) => dispatch(fetchAllServerInfo(serverId))
    };
};

export default withRouter(connect(mSTP, mDTP)(Channels));