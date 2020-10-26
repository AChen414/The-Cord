import React from 'react';
import FooterContainer from './footer/footer_container'
import ServersContainer from '../servers/servers_container';
import ChannelsContainer from '../channels/channels_container';
import MessagesContainer from '../messages/messages_container';
import Home from '../main/home'
import { Route } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div className="main-page">
                <ServersContainer />
                <FooterContainer />
                <Route exact path="/@me" component={Home}/>
                <Route path="/@me/channels/:server_id/:channel_id" component={ChannelsContainer}/>
            </div>
        )
    };
};

export default Main;
