import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Welcome back!'
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect (mSTP, mDTP)(SessionForm);