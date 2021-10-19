import React from 'react';
import { render, screen } from '../../../scripts/utils';
import FilterTab from './FilterTab';
import '../../../scripts/i18n';

describe('FilterTab component', () => {
    it('should render', () => {
        render( <FilterTab /> );
    });
    it('should contain text xyz"', () => {
        render( <FilterTab text='xyz'/> );
        expect(screen.getByText('xyz')).toBeTruthy;
    });
    it('should contain text xyz"', () => {
        const { container } = render( <FilterTab variant='primary'/> );
        expect(container.firstChild.className).toContain('btn-primary');
    });
});