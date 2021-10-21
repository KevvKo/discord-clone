import React from 'react';
import { render, screen } from '../../../scripts/utils';
import FormModal from './FormModal';
import '../../../scripts/i18n';

describe('FormModal component', () => {
    it('should render', () => {
        render( <FormModal /> );
    });
    it('should render title', () => {
        render(
            <FormModal show={true} modalTitle='xyz' />);
        expect(screen.getByText('xyz')).toBeTruthy();
    });
    it('should render children node', () => {
        render(
            <FormModal show={true}>
                xyz
            </FormModal>
        );
        expect(screen.getByText('xyz').innerHTML).toBe('xyz');
    });
    it('should render childs in footer', () => {

        const span = <span data-testid='span-xyz'>xyz</span>;

        render(
            <FormModal show={true} footerChildren={span}/>
        );
        expect(screen.getByTestId('span-xyz')).toBeTruthy();
        expect(screen.getByText(/xyz/i).innerHTML).toBe('xyz');
    });
    it('should render children node', () => {
        render(
            <FormModal>
                xyz
            </FormModal>
        );
        expect(screen.queryByText(/xyz/i)).toBeNull();
    });
});