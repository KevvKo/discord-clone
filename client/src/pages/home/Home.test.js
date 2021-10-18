import React from 'react';
import Home from './Home';
import '../../scripts/i18n';
import { render } from '../../scripts/utils';

describe('Home component', () => {
    it('should render', () => {
        render(
            <Home />
        );
    });
    it('should be in loading state', () => {
        const { getByText} = render( <Home /> );
        expect(getByText('loading...')).toBeTruthy();
    });
});
