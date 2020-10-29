import * as APIMessageUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

const removeMessage = messageId => {
    return {
        type: REMOVE_MESSAGE,
        messageId
    }
}

export const createMessage = message => dispatch => (
    APIMessageUtil.createMessage(message).then(message => (
        dispatch(receiveMessage(message))
    ))
)

export const editMessage = message => dispatch => (
    APIMessageUtil.editMessage(message).then((message) => (
        dispatch(receiveMessage(message))
    ))
)

export const deleteMessage = messageId => dispatch => (
    APIMessageUtil.deleteMessage(messageId).then((messageId) => (
        dispatch(removeMessage(messageId))
    ))
)