import React from 'react';
import { render, screen } from '../../scripts/utils';
import SettingsPanel from './SettingsPanel';
import '../../scripts/i18n';

describe('SettingsPanel component', () => {
    it('should render', () => {
        render( <SettingsPanel /> );
    });
    it('should render children components', () => {
        const button = document.createElement('button');
        button.setAttribute('data-testid', 'button');
        render( 
            <SettingsPanel>
                <button data-testid='xyz'>xyz</button>
            </SettingsPanel>        
        );

        expect(screen.getByTestId('xyz')).toBeTruthy();
        expect(screen.getByText('xyz').innerHTML ).toBe('xyz');
    });
});