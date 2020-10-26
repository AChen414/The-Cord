import { RECEIVE_CHANNEL_MESSAGES } from '../actions/channel_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            return Object.assign({}, state, action.messsages);
        default:
            return state;
    }
}

export default messagesReducer;
