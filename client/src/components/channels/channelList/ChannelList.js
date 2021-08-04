import React from 'react';
import './ChannelList.css';
import ChannelTab from '../channelTab/ChannelTab';
function ChannelList() {

    return (
        <div className="channel-list pl-2 pr-1">
            <div className="p-1 justify-content-center">
                <ChannelTab icon="bi-controller" />
            </div>
            <div className="p-1 justify-content-center">
                <ChannelTab icon="bi-compass-fill" />
            </div>
            <div className="p-1 justify-content-center">
                <ChannelTab icon="bi-plus" />
            </div>
        </div>
    );
}

export default ChannelList;
