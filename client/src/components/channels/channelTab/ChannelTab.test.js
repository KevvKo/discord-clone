import React from 'react';
import { render, screen } from '../../../scripts/utils';
import ChannelTab from './ChannelTab';
import '../../../scripts/i18n';

describe('ChannelTab component', () => {
    it('should render', () => {
        render( <ChannelTab /> );
    });
    it('should render default values', () => {
        const { container } = render( <ChannelTab /> );
        expect(container.firstChild.className).toBe('default-hover channel-tab d-flex justify-content-center');
        expect(screen.getByTestId(/channel-tab-icon/i).className).toContain('bi-person-fill');
    });
    it('should render alternative classes', () => {
        const { container } = render( <ChannelTab defaultBehaviour={false} /> );
        expect(container.firstChild.className).toBe('channel-tab d-flex justify-content-center');
    });
    it('should render close icon', () => {
        const { container } = render( <ChannelTab icon='bi-x' /> );
        expect(screen.getByTestId(/channel-tab-icon/i).className).toContain('bi-x');
    });
});