import * as APIServerUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';

const receiveServers = servers => {
    return {
        type: RECEIVE_SERVERS,
        servers
    };
};

const receiveServer = server => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

export const fetchServers = () => dispatch => (
    APIServerUtil.fetchServers().then(servers => (
        dispatch(receiveServers(servers))
    ))
);

export const createServer = () => dispatch => (
    APIServerUtil.createServer().then(server => (
        dispatch(receiveServer(server))    
    ))
);