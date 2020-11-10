export const fetchServers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/servers'
    })
}

export const createServer = server => {
    return $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: {server}
    });
};

export const fetchServer = serverId => {
    return $.ajax({
        method: 'GET',
        url: `api/servers/${serverId}`
    })
}

export const destroyServer = serverId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`
    })
}

export const joinServer = inviteCode => {
    return $.ajax({
        method: 'POST',
        url: `api/servers/join`,
        data: inviteCode
    })
}