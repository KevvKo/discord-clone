import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';

import '../services/i18n';

describe('App component', () => {
    const cache = new InMemoryCache({ });
    const mocks = [];

    it('should render', () => {
        const view = render(
            <MockedProvider cache={cache} mocks={mocks} addTypename={false}>
                <App />
            </MockedProvider>
        );
    });
});
