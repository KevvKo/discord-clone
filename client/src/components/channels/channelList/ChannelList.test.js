import React from 'react';
import { render, screen, act } from '../../../scripts/utils';
import ChannelList from './ChannelList';

describe('Channellist component', () => {
    it('should render', () => {
        render(
            <ChannelList />
        );
    });
});