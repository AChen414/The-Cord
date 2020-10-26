import * as APIMessageUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const createMessage = message => dispatch => (
    APIMessageUtil.createMessage(message).then(message => (
        dispatch(receiveMessage(message))
    ))
)