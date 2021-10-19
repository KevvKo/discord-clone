import React from 'react';
import { render, screen } from '../../../scripts/utils';
import SearchField from './SearchField';

describe('SearchField component', () => {
    it('should render', () => {
        render( <SearchField placeholder='xyz'/> );
        expect(screen.getByPlaceholderText('xyz')).toBeTruthy();
    });
    it('should render default type input', () => {
        
        render( <SearchField type='button' placeholder='xyz'/> );
        expect(screen.getByRole('button')).toBeTruthy();
        expect(screen.getByText('xyz')).toBeTruthy();

    });
});