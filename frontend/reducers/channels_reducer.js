import { RECEIVE_ALL_SERVER_INFO } from '../actions/server_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SERVER_INFO:
            return action.allServerInfo.entities.channels;
        default: 
            return state;
    }
};

export default channelsReducer;