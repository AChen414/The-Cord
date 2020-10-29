import * as APIServerUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const RECEIVE_ALL_SERVER_INFO = 'RECEIVE_ALL_SERVER_INFO';
export const REMOVE_SERVER = 'REMOVE_SERVER';

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

const receiveAllServerInfo = allServerInfo => {
    return {
        type: RECEIVE_ALL_SERVER_INFO,
        allServerInfo
    }
}

export const removeServer = serverId => {
    return {
        type: REMOVE_SERVER,
        serverId
    }
}

export const receiveServerErrors = errors => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors
    }
}

export const fetchServers = () => dispatch => (
    APIServerUtil.fetchServers().then(servers => (
        dispatch(receiveServers(servers))
    ))
);

export const createServer = (server) => dispatch => (
    APIServerUtil.createServer(server).then(server => (
        dispatch(receiveServer(server))    
    ), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
);

export const fetchAllServerInfo = serverId => dispatch => (
    APIServerUtil.fetchServer(serverId).then((server) => (
        dispatch(receiveAllServerInfo(server))
    ))
);

export const deleteServer = serverId => dispatch => (
    APIServerUtil.destroyServer(serverId).then((serverId) => (
        dispatch(removeServer(serverId))
    ))
)