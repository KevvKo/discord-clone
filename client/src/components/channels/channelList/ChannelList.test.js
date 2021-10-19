import React from 'react';
import { render } from '../../../scripts/utils';
import ChannelList from './ChannelList';
import '../../../scripts/i18n';

describe('ChannelList component', () => {
    it('should render', () => {
        render( <ChannelList /> );
    });
});