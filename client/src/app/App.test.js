import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router';
import { InMemoryCache } from '@apollo/client';
import '../services/i18n';

describe('App component', () => {
    const cache = new InMemoryCache({ });
    const mocks = [];

    it('should render', () => {
        render(
            <MockedProvider cache={cache} mocks={mocks} addTypename={false}>
                <App /> 
            </MockedProvider>
        );
    });
    it('should render a page-view', () => {

        const view = render(
            <MockedProvider cache={cache} mocks={mocks} addTypename={false}>
                <MemoryRouter>
                    <App /> 
                </MemoryRouter>
            </MockedProvider>
        );

        const homeView = view.getByRole('page-view');
        expect(homeView).toBeTruthy();
    });
});
