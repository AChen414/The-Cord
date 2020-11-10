import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ServerItem from './server_item';
import Modal from '../modal';
import { openModal, closeModal } from '../../actions/modal_actions';

class Servers extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchServers();
    }

    componentDidUpdate(prevProps) {
        if(this.props.servers.length !== prevProps.servers.length) {
            // this.props.fetchServers();
        }
    }

    render() {
        const { servers, fetchAllServerInfo } = this.props
        return(
            <>
                <div className="servers">
                    <div className="server-buttons">
                        <NavLink
                            exact to={`/@me`}
                            className="server-button"
                            activeStyle={{ borderRadius: '25%', backgroundColor: '#7289da' }}
                        >
                            <p>Home</p>
                        </NavLink>
                        <div className="separator"></div>
                        <div className="servers-list">
                            <ul>
                                {servers.map( (server, i) => (
                                    <ServerItem server={server} key={`server-${i}`} />
                                ))}
                            </ul>
                        </div>
                        <div className="separator"></div>
                        <div 
                            className="server-button"
                            onClick={() => dispatch(openModal('Add Server'))}
                            id="add-server-button"
                        >
                            +
                            <div className="server-name-hover">
                                <span>Create a Server</span>
                            </div>
                        </div>
                        <div
                            className="server-button"
                            onClick={() => dispatch(openModal('Join Server'))}
                            id="join-server-button"
                        >
                            <img src="https://the-cord-dev.s3-us-west-1.amazonaws.com/join.png?versionId=1v5ZcnHOvyLWV9bV49UGQtYivjJ.Z.iM"/>
                            <div className="server-name-hover">
                                <span>Join Server</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal />
            </>
        )
    };
};

export default Servers;