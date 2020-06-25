import { connect } from 'react-redux';
import Greeting from './greeting';
import { login } from '../../actions/session_actions'

const mSTP = ({ session, entities: {users} }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(Greeting);