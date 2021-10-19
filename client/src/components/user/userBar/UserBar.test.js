import React from 'react';
import { render, screen } from '../../../scripts/utils';
import UserBar from './UserBar';
import '../../../scripts/i18n';

describe('UserBar component', () => {
    it('should render', () => {
        render( <UserBar/> );
    });
    it('should render necessary components', () => {
        
        render( <UserBar/> );
        expect(screen.getByTestId('user-tag')).toBeTruthy();
        expect(screen.getByTestId('user-avatar')).toBeTruthy();
        expect(screen.getAllByTestId('icon-button')).toHaveLength(3);

    });
});