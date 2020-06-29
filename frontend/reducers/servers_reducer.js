import { RECEIVE_SERVERS } from '../actions/server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_SERVERS:
            return action.servers;
        default:
            return state;
    };
};

export default serversReducer;