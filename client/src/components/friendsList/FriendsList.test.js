import React from 'react';
import { render, screen } from '../../scripts/utils';
import FriendsList from './FriendsList';
import '../../scripts/i18n';

describe('FriendsList component', () => {
    it('should render', () => {
        render( <FriendsList /> );
    });
    it('should render friendtabs', () => {
        render( <FriendsList /> );
        expect(screen.queryByText(/Friends/i)).toBeTruthy();
        expect(screen.queryByText(/Nitro/i)).toBeTruthy();
    });
    it('should render title', () => {
        render( <FriendsList /> );
        expect(screen.queryByText(/Direct messages/i)).toBeTruthy();
    });
    it('should render icon button', () => {
        render( <FriendsList /> );
        expect(screen.queryAllByTestId(/icon-button/i)).toBeTruthy();
    });
});