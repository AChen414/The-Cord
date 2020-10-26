export const fetchChannelMessages = (channelId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/${channelId}`
    })
}