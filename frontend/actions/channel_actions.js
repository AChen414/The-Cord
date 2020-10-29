import * as APIChannelUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannelMessages = messages => {
    return {
        type: RECEIVE_CHANNEL_MESSAGES,
        messages
    }
}

const receiveChannel = channel => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

export const fetchChannelMessages = (channelId) => dispatch => (
    APIChannelUtil.fetchChannelMessages(channelId).then((messages) => (
        dispatch(receiveChannelMessages(messages))
    ))
)

export const createChannel = (channel) => dispatch => (
    APIChannelUtil.createChannel(channel).then(channel => (
        dispatch(receiveChannel(channel))
    ))
)

export const editChannel = (channel) => dispatch => {
    APIChannelUtil.editChannel(channel).then((channel) => (
        dispatch(receiveChannel(channel))
    ))
}