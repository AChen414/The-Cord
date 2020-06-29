export const fetchServers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/servers'
    })
}