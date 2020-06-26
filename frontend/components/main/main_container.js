import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';

const mSTP = (state) => {
    return {

    };
};

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(Main);