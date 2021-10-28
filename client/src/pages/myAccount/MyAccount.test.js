import React from 'react';
import MyAccount from './MyAccount';
import '../../scripts/i18n';
import { render, screen } from '../../scripts/utils';

describe('MyAccount', () => {
    beforeEach(() => {
        render( <MyAccount /> );
    });
    it('renders all titles correctly', () => {
        expect(screen.getByText('My Account')).toBeTruthy();
        expect(screen.getByText('Password and Authentication')).toBeTruthy();
    });
    it('renders all components correctly', () => {
        expect(screen.getByTestId('user-panel')).toBeTruthy();
        expect(screen.getByTestId('password-authentication')).toBeTruthy();
        expect(screen.getByTestId('delete-and-deactivate')).toBeTruthy();
    });
});
