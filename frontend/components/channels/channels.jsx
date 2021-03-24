import React, { useState, useEffect } from 'react';
import Modal from '../modal';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import MessagesContainer from '../messages/messages_container';
import ChannelItem from './channel_item';

function Channels(props) {
    const toggleDropdown = () => {
        const dropDown = document.getElementsByClassName('server-options');
        if (dropDown[0].style.visibility === 'hidden') {
            dropDown[0].style.visibility = 'visible';
        } else {
            dropDown[0].style.visibility = 'hidden';
        }
    }

    const deleteServer = () => {
        props.deleteServer(props.server.id)
            .then(() => props.history.push('/@me'))
            .then(() => location.reload())
    }

    useEffect(() => {
        props.fetchAllServerInfo(props.serverId);
    }, [])

    useEffect(() => {
        props.fetchAllServerInfo(props.serverId);
    }, [props.serverId])

    let channel = props.channels;
    let channelId = props.channelId;
    let currentChannel = channel[channelId]?.name;
    let serverDelete;
    if (props.currentUser.id === props.server.owner_id) {
        serverDelete = 
            <div className="server-delete" onClick={() => deleteServer()}>
                <div className="delete-server">Delete Server</div>
                <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/Red_X.svg" />
            </div>
    }
    const serverInvite = 
        <div className="server-invite-code" onClick={() => dispatch(openModal('Invite Server', props.server))}>
            <div className="invite">Invite People</div>
            <div className="invite-icon">+</div>
        </div>

    return (
        <>
            <div className="channels">
                <div className="server-name-header" onClick={toggleDropdown}>
                    <h1>{props.server.name}</h1>
                    <span>V</span>
                    <div className="server-options">
                        {serverInvite}
                        {serverDelete}
                    </div>
                </div>
                <div className="line"></div>
                <div className="channels-list">
                    <div className="text-channels">
                        <span>TEXT CHANNELS</span>
                        <span className="add-channel" onClick={() => dispatch(openModal('Add Channel'))}>+</span>
                        <div className="channel-add-hover">Create Channel</div>
                    </div>
                    <div className="text-channels-list">
                        {props.channels.map((channel, i) => (
                            <ChannelItem
                                channel={channel}
                                serverId={props.serverId}
                                server={props.server}
                                currentUser={props.currentUser}
                                openModal={openModal}
                                key={`channel-${i}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="top-nav-bar">
                <div className="channel-name">
                    #{currentChannel}
                </div>
            </div>

            <div className="channel-messages">

                <div className="messages">
                    <MessagesContainer />
                    <div className="users">
                        <div className="users-list">
                            <h1>Users</h1>
                            {props.users.map((user, i) => (
                                <div className="user" key={user.username}>{user.username}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </>
    )
}

export default Channels;