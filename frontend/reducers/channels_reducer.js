import { RECEIVE_ALL_SERVER_INFO } from '../actions/server_actions';
import { RECEIVE_CHANNEL_MESSAGES, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_SERVER_INFO:
            return action.allServerInfo.entities.channels;
        case RECEIVE_CHANNEL_MESSAGES:
            return action.messages.entities.channels;
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, action.channel);
        case REMOVE_CHANNEL:
            delete nextState[action.channelId];
            return nextState;
        default: 
            return state;
    }
};

export default channelsReducer;