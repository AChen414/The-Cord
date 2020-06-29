import React from 'react'
import { Link } from 'react-router-dom';
import ServerItem from './server_item';

class Servers extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchServers();
    }

    render() {
        const { servers } = this.props
        return(
            <div className="servers">
                <div className="server-buttons">
                    <span>Home</span>
                    <div className="separator"></div>
                    <div className="servers-list">
                        <ul>
                            {servers.map( (server, i) => (
                                <ServerItem server={server} key={`server-${i}`} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
};

export default Servers;