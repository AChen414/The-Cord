import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ChannelItem = (props) => {
    let cog = 
        <>
            <img 
            src='https://the-cord-dev.s3-us-west-1.amazonaws.com/cog.png'
            onClick={() => dispatch(props.openModal('Edit Channel'))}
            />
            <div className="channel-edit-hover">Edit Channel</div>
        </>
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
                {props.server.owner_id === props.currentUser.id ? cog : ''}
            </NavLink> 
        </>
    )
};

export default ChannelItem;
