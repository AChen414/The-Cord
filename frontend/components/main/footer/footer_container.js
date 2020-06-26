import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Footer from './footer';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUser.id]
    };
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(Footer);