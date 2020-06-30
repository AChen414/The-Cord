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
        data: server
    });
};