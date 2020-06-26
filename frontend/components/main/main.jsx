import React from 'react';
import FooterContainer from './footer/footer_container'

class Main extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div className="main-page">
                <ServersContainer /> 
                <FooterContainer />
            </div>
        )
    };
};

export default Main;

/* <ChannelsContainer />
*/