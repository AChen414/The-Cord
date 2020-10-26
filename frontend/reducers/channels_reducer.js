import { RECEIVE_ALL_SERVER_INFO } from '../actions/server_actions';
import { RECEIVE_CHANNEL_MESSAGES } from '../actions/channel_actions'

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SERVER_INFO:
            return action.allServerInfo.entities.channels;
        case RECEIVE_CHANNEL_MESSAGES:
            return action.messages.entities.channels
        default: 
            return state;
    }
};

export default channelsReducer;