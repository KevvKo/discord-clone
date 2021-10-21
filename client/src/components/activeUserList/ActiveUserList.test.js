import React from 'react';
import { render, screen } from '../../scripts/utils';
import ActiveUserList from './ActiveUserList';
import '../../scripts/i18n';

describe('ActiveUserList component', () => {
    it('should render', () => {
        render( <ActiveUserList /> );
    });
    it('should contain translations', () => {
        render( <ActiveUserList /> );
        expect(screen.getByText(/Now active/i)).toBeTruthy();
        expect(screen.getByText(/So far everythig is calm./i)).toBeTruthy();
        expect(screen.getByText(/If a friend starts an activity/i)).toBeTruthy();
    });
});