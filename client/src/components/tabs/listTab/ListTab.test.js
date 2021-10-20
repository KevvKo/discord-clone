import React from 'react';
import { render, screen, fireEvent } from '../../../scripts/utils';
import ListTab from './ListTab';
import '../../../scripts/i18n';

describe('ListTab component', () => {
    it('should render', () => {
        render( 
            <ListTab>
                xyz
            </ListTab> 
        );
        expect(screen.getByText('xyz').innerHTML).toBe('xyz');
    });
    it('should invoke callback by click', () => {

        const mockCallBack = jest.fn();

        render( 
            <ListTab callback={ mockCallBack }>
                xyz
            </ListTab> 
        );
        fireEvent.click( screen.getByText('xyz'));
        expect((mockCallBack.mock.calls.length)).toBe(1);
    });
});
