import * as APIChannelUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';

const receiveChannelMessages = messages => {
    return {
        type: RECEIVE_CHANNEL_MESSAGES,
        messages
    }
}

export const fetchChannelMessages = (channelId) => dispatch => (
    APIChannelUtil.fetchChannelMessages(channelId).then((messages) => (
        dispatch(receiveChannelMessages(messages))
    ))
)