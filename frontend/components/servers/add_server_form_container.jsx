import { connect }  from 'react-redux';
import AddServerForm from './add_server_form';
import { createServer } from '../../actions/server_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {
        currentUser: state.session.user,
        formType: 'Add Server',
        servers: state.entities.servers
    };
};

const mDTP = dispatch => {
    return {
        createServer: server => dispatch(createServer(server)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(AddServerForm);