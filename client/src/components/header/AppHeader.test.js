import React from 'react';
import { render, screen } from '../../scripts/utils';
import AppHeader from './AppHeader';
import '../../scripts/i18n';

describe('SearchBar component', () => {
    it('should render', () => {
        render( <AppHeader /> );
    });
    it('should contain label "discord cloe"', () => {
        render( <AppHeader /> );
        expect(screen.getByText('Discord Clone')).toBeTruthy;

    });
});