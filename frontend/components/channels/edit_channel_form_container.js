import { connect } from 'react-redux';
import EditChannelForm from './edit_channel_form';
import { editChannel, deleteChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        serverId: ownProps.match.params.server_id,
        channelId: ownProps.match.params.channel_id,
        formType: 'Edit Channel',
        channel: state.entities.channels[ownProps.match.params.channel_id]
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        editChannel: channel => dispatch(editChannel(channel)),
        deleteChannel: channelId => dispatch(deleteChannel(channelId))
    }
}

export default withRouter(connect(mSTP, mDTP)(EditChannelForm));