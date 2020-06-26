import * as APIServerUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';

const receiveServers = servers => {
    return {
        type: RECEIVE_SERVERS,
        servers
    };
};

export const fetchServers = () => dispatch => (
    APIServerUtil.fetchServers().then(servers => (
        dispatch(receiveServers(servers))
    ))
);