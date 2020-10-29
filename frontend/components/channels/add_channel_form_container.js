import { connect } from 'react-redux';
import AddChannelForm from './add_channel_form';
import { createChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        formType: 'Add Channel',
        channels: Object.values(state.entities.channels),
        serverId: Object.values(state.entities.channels)[0].server_id
    }
}

const mDTP = dispatch => {
    return {
        createChannel: channel => dispatch(createChannel(channel)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(AddChannelForm);