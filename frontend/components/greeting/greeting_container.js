import { connect } from 'react-redux';
import Greeting from './greeting';

const mSTP = ({ session, entities: {users} }) => {
    return {
        currentUser: users[session.id]
    };
};

export default connect(mSTP, null)(Greeting);