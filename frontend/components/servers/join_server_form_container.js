import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { joinServer } from '../../actions/server_actions';
import JoinServerForm from './join_server_form';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode))
    }
}

export default connect(mSTP, mDTP)(JoinServerForm);