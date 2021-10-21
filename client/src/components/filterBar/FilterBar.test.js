import React from 'react';
import { render, screen } from '../../scripts/utils';
import FilterBar from './FilterBar';
import '../../scripts/i18n';

describe('FilterBar component', () => {
    it('should render', () => {
        render( <FilterBar/> );
    });
    it('should render people icon', () => {
        render( <FilterBar/> );
        expect(screen.queryByTestId('people-icon')).toBeTruthy();
    });
    it('should render filtertabs', () => {
        render( <FilterBar/> );
        expect(screen.queryByText(/Online/i)).toBeTruthy();
        expect(screen.queryByText(/All/i)).toBeTruthy();
        expect(screen.queryByText(/Pending/i)).toBeTruthy();
        expect(screen.queryByText(/Blocked/i)).toBeTruthy();
        expect(screen.queryByText(/Add Friend/i)).toBeTruthy();
    });
    it('should render icon buttons', () => {
        render( <FilterBar/> );
        expect(screen.queryAllByTestId(/icon-button/i).length).toBe(3);
    });
});