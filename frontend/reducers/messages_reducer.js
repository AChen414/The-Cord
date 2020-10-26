import { RECEIVE_CHANNEL_MESSAGES } from '../actions/channel_actions';
import { RECEIVE_ALL_SERVER_INFO} from '../actions/server_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            return Object.assign({}, state, action.messages.entities.messages);
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, action.message)
        case RECEIVE_ALL_SERVER_INFO:
            return Object.assign({}, state, action.allServerInfo.entities.messages)
        default:
            return state;
    }
}

export default messagesReducer;
