import React from 'react';
import { Link } from 'react-router-dom';

const ServerItem = (props) => {
    let abbreviated = '';
    if (props.server.name) {
        let serverNameArr = props.server.name.split(' ');
        serverNameArr.forEach((name) => {
            abbreviated += name[0]
        });
    };

    return(
        <div className="server-button">
            <p>{abbreviated}</p>
            <div className="server-name-hover">
                <span>{props.server.name}</span>
            </div>
        </div>
    )
}

export default ServerItem;