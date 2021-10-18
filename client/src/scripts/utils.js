// Array 

/**
 * @description returns a sequence as array
 * @param {integer} start 
 * @param {Integer} stop 
 * @param {Integer} step 
 */

export const range = (start, stop, step = 1) => {
        
    return Array.from(
        { length: (stop - start) / step + 1}, 
        (_, i) => start + (i * step)
    );
};

/**
 * 
 * @param {String} email 
 * @returns String
 */

export const obscureString = (email) => {
    let [ name, domain] = email.split('@');
    return `${new Array(name.length).join('*')}@${domain}`;
};

export const countryPrefix = () =>  {

    return {
        'Netherlands': '+31',
        'France': '+33',
        'Switzerland': '+41',
        'Germany': '+49',
        'Afghanistan': '+93',
        'Algeria': '+213',
        'Ireland': '+353',
        'Albania': '+355',
    };
};

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from '../store/slices/userSlice';
import userProfileReducer from '../store/slices/userProfileSlice';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';
import { MemoryRouter } from 'react-router';

function render(
    ui,
    mocks = [],
    {
        preloadedState,
        store = configureStore({  reducer: {
            user: userReducer,
            userProfile: userProfileReducer
        }, preloadedState }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {

        const cache = new InMemoryCache({ });
        return (
            <MockedProvider cache={cache} mocks={mocks}>
                <MemoryRouter>
                    <Provider store={store}>
                        {children}
                    </Provider>
                </MemoryRouter>
            </MockedProvider>
        )
        }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
export { render };