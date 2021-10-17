import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';
import '../../services/i18n';

describe('Home component', () => {
    const cache = new InMemoryCache({ });
    const mocks = [];

    it('should render', () => {
        const view = render(
            <MockedProvider cache={cache} mocks={mocks} addTypename={false}>
                <Home />
            </MockedProvider>
        );
    });
});
