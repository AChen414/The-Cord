export const fetchChannelMessages = (channelId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/${channelId}`
    })
}

export const createChannel = (channel) => {
    return $.ajax({
        method: 'POST',
        url: '/api/channels',
        data: {channel}
    })
}

export const editChannel = (channel) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/channels/${channel.id}`,
        data: {channel}
    })
}