import React from 'react';
import { render, screen } from '../../../scripts/utils';
import ChannelList from './ChannelList';
import '../../../scripts/i18n';

describe('ChannelList component', () => {
    it('should render', () => {
        render( <ChannelList /> );
    });
    it('should render all channeltabs', () => {
        render( <ChannelList /> );
        expect(screen.getAllByTestId('channel-tab').length).toBe(3);
    });
});