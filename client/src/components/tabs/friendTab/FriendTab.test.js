import React from 'react';
import { render, screen } from '../../../scripts/utils';
import FriendTab from './FriendTab';
import '../../../scripts/i18n';

describe('FriendTab component', () => {
    it('should render', () => {
        render( <FriendTab /> );
    });
    it('should render an icon', () => {
        render( <FriendTab icon='x' /> );
        expect(screen.getByTestId('friend-tab-icon')).toBeTruthy();
    });
    it('should contain provided text', () => {
        render( <FriendTab text='xyz' /> );
        expect(screen.getByText('xyz').innerHTML).toBe('xyz');
    });
    it('should contain an icon button', () => {
        render( <FriendTab closeButton={true} /> );
        expect(screen.getByTestId('icon-button')).toBeTruthy();
    });
});