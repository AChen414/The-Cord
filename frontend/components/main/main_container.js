import { connect } from 'react-redux';
import Main from './main';

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
    };
};

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(Main);