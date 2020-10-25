import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ServerItem = (props) => {
    let abbreviated = '';
    if (props.server.name) {
        let serverNameArr = props.server.name.split(' ');
        serverNameArr.forEach((name) => {
            abbreviated += name[0]
        });
    };

    return(
        <div className="server">
            <NavLink
                to={`/@me/channels/${props.server.id}${`/${props.server.channel_ids[0] ? props.server.channel_ids[0] : ''}`}`}
                className="server-button"
                activeStyle={{ borderRadius: '25%', backgroundColor: '#7289da' }}
            >
                <p>{abbreviated}</p>
                <div className="server-name-hover">
                    <span>{props.server.name}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default ServerItem;