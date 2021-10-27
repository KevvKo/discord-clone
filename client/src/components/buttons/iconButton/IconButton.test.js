import React from 'react';
import { render, screen, fireEvent, act } from '../../../scripts/utils';
import IconButton from './IconButton';
import '../../../scripts/i18n';

describe('IconButton component', () => {
    it('should render', () => {
        render( <IconButton /> );
    });
    it('should support default props', () => {
        render( <IconButton /> );
        expect( screen.getByTestId('icon').className).toBe('bi bi-person-fill');
        expect( screen.getByTestId('icon-button').className).toContain('p-0 icon-hover');
    });
    it('should inovke callback on click', () => {

        const mockCallBack = jest.fn();
        render( <IconButton callback={ mockCallBack }/> );
        fireEvent.click( screen.getByTestId('icon-button'));
        expect((mockCallBack.mock.calls.length)).toBe(1);
    });
    it('should render provided icon', () => {
        render( <IconButton icon='bi-x' /> );
        expect( screen.getByTestId('icon').className).toBe('bi bi-x');
    });
    it('change the buttonClass props', () => {
        render( <IconButton hover={true} /> );
        expect( screen.getByTestId('icon-button').className).toContain('p-0 icon-hover-bg');
    });
    it('should pop up a tooltip by hovering the button', async () => {
        render( <IconButton tooltipText='xyz' /> );
        await act( async () => {
            fireEvent.mouseOver(screen.getByTestId('icon-button'));
        });
        expect( screen.getByText('xyz')).toBeTruthy();
        expect(screen.getByText('xyz').innerHTML).toBe('xyz')
    });
    
});