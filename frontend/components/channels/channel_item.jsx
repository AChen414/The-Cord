import React from 'react';
import { Link } from 'react-router-dom';

const ChannelItem = (props) => {

    return(
        <>
            <Link to={`/@me/channels/${`${props.serverId}`}/${props.channel.id}`}>
                <div className="channel">
                    <span>{props.channel.name}</span>

                </div>
            </Link>
        </>
    )
};

export default ChannelItem;