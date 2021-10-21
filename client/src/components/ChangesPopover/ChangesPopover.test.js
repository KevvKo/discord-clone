import React from 'react';
import { render, screen } from '../../scripts/utils';
import ChangesPopover from './ChangesPopover';
import '../../scripts/i18n';

describe('ChangesPopover component', () => {
    it('should render', () => {
        render( <ChangesPopover /> );
    });
    it('should not render ChangesPopover', () => {
        render( <ChangesPopover /> );
        expect(screen.queryByTestId(/changes-popover/i)).toBeFalsy();
    });
    it('should not render ChangesPopover', () => {
        render( <ChangesPopover show={true} /> );
        expect(screen.getAllByRole(/button/).length).toBe(2);
    });
});