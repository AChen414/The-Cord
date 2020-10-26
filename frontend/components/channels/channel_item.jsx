import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ChannelItem = (props) => {

    return(
        <>
            <NavLink
                to={`/@me/channels/${`${props.serverId}`}/${props.channel.id}`}
                className="channel"
                activeStyle={{ 
                    backgroundColor: '#393c42',
                    borderRadius: '5px',
                    color: 'white'
                 }}
            >
                <span>{props.channel.name}</span>
            </NavLink>
        </>
    )
};

export default ChannelItem;