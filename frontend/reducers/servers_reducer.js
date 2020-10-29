import { RECEIVE_SERVERS, RECEIVE_ALL_SERVER_INFO, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_SERVERS:
            return action.servers;
        case RECEIVE_ALL_SERVER_INFO:
            return Object.assign({}, state, action.allServerInfo.entities.servers)
        case RECEIVE_SERVER: 
            return Object.assign({}, state, action.server.entities.servers)
        case REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState;
        default:
            return state;
    };
};

export default serversReducer;