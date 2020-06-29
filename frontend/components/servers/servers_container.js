import { connect } from 'react-redux';
import { fetchServers } from '../../actions/server_actions';

import Servers from './servers';

const mSTP = state => {
    return {
        servers: Object.values(state.entities.servers)
    }
};

const mDTP = dispatch => {
    return {
        fetchServers: () => dispatch(fetchServers())
    };
};

export default connect(mSTP, mDTP)(Servers);