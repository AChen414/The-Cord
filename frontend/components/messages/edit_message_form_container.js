import { connect } from 'react-redux';
import EditMessageForm from './edit_message_form';
import { closeModal } from '../../actions/modal_actions';
import { editMessage, deleteMessage } from '../../actions/message_actions';

const mSTP = (state) => {
    return {
        formType: 'Edit Message',
        author: state.session.currentUser,
        messages: state.entities.messages,
        messageId: state.ui.modalProps
    }
}

const mDTP = dispatch => {
    return {
        editMessage: (message) => dispatch(editMessage(message)),
        deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(EditMessageForm);