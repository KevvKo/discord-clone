import React from 'react';
import { render, screen, fireEvent } from '../../../scripts/utils';
import Select from './Select';
import '../../../scripts/i18n';

describe('AppMain component', () => {
    it('should render', () => {
        render( <Select /> );
    });
    it('should have the expected name', () => {
        render( <Select name='xyz'/> );
        expect(screen.getByTestId('select').name).toBe('xyz');
    });
    it('should contain and render the list', () => {
        const mockData = [ 'abc', 'ghj' ,'xyz'];
        render( <Select data={ mockData } /> );
        expect(screen.getByText('abc').innerHTML).toBe('abc');
        expect(screen.getByText('ghj').innerHTML).toBe('ghj');
        expect(screen.getByText('xyz').innerHTML).toBe('xyz');
    });
    it('should invoke the function on change', () => {
        const mockCallback = jest.fn();
        const mockData = [ 'abc', 'ghj' ,'xyz'];
        render( <Select data={ mockData } onChange={ mockCallback } /> );
        fireEvent.change( screen.getByTestId('select') );
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});