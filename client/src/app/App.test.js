import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router';
import { render, screen } from '../scripts/utils';
import '../scripts/i18n';

describe('App component', () => {

    it('should render', () => {
        render( <App /> );
    });
    it('should render a page-view', () => {

        render(
            <MemoryRouter>
                <App /> 
            </MemoryRouter>
        );

        const homeView = screen.getByRole('page-view');
        expect(homeView).toBeTruthy();
    });
});
