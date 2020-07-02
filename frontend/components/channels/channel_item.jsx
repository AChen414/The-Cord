import React from 'react';
import { Link } from 'react-router-dom';

const ChannelItem = (props) => {

    return(
        <>
            <Link>
                <div className="channel">
                    <span>{props.channel.name}</span>

                </div>
            </Link>
        </>
    )
};

export default ChannelItem;