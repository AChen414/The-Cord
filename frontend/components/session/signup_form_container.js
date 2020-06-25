import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Create an account'
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mSTP, mDTP)(SessionForm);
