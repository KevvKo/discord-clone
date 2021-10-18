import React from 'react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router';
import { InMemoryCache } from '@apollo/client';
import { render } from '../scripts/utils';
import '../scripts/i18n';

describe('App component', () => {
    const cache = new InMemoryCache({ });
    const mocks = [];

    it('should render', () => {
        render( <App /> );
    });
    it('should render a page-view', () => {

        const view = render(
            <MemoryRouter>
                <App /> 
            </MemoryRouter>
        );

        const homeView = view.getByRole('page-view');
        expect(homeView).toBeTruthy();
    });
});
