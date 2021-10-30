import React from 'react';
import { render, screen, fireEvent, act } from '../../../../../../scripts/utils';
import renderer from 'react-test-renderer';
import PrefixDropdown from './PrefixDropdown';

describe('PrefixDropdown component', () => {
    const mockCallback = jest.fn();

    beforeEach(() => {
        render( <PrefixDropdown onSelect={mockCallback}/> );
    });
    it('renders correctly', () =>{
        const tree = renderer
            .create(<PrefixDropdown onSelect={mockCallback}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render all countryprefixes', async () => {
        await act( async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(screen.getByTestId('prefix-dropdown').querySelectorAll('.dropdown-item').length).toBe(8);
    });
    it('should render all countryprefixes', async () => {
        await act( async () => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(mockCallback.mock.calls.length).toBe(1);
        fireEvent.click(screen.getByTestId('prefix-dropdown').querySelector('.dropdown-item'));
        expect(mockCallback.mock.calls.length).toBe(2);
    });
});
