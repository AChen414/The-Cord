import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Messages from './messages';

const mSTP = (state, ownProps) => {
    return {
        channelId: ownProps.match.params.channel_id,
        channels: state.entities.channels
    };
};

const mDTP = dispatch => {
    return {

    };
};

export default withRouter(connect(mSTP, mDTP)(Messages));