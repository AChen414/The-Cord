import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import InviteServer from './invite_server';

const mSTP = (state, ownProps) => {
    return {
        formType: 'Invite Server', 
        server: state.ui.modalProps
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(InviteServer);