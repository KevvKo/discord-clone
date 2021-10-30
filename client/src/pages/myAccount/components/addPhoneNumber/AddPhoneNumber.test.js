import React from 'react';
import { render, screen, fireEvent, act } from '../../../../scripts/utils';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';
import userReducer from '../../../../store/slices/userSlice';
import userProfileReducer from '../../../../store/slices/userProfileSlice';
import AddPhoneNumber from './AddPhoneNumber';
import '../../../../scripts/i18n';

describe('AddPhoneNumber component', () => {

    beforeEach(() => {
        render(
            <AddPhoneNumber /> );
    });
    it('renders correctly', () =>{
        const store = configureStore({  reducer: {
            user: userReducer,
            userProfile: userProfileReducer
        }});

        const cache = new InMemoryCache({ });
        const mocks = [];

        const tree = renderer
            .create(
                <MockedProvider cache={cache} mocks={mocks}>
                    <Provider store={store}>
                        <AddPhoneNumber />
                    </Provider>
                </MockedProvider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('render lables correctly', () => {
        expect(screen.getByText(/Phone Number/)).toBeTruthy();
        expect(screen.getByText(/Add/)).toBeTruthy();
        expect(screen.getByText(/no phone number/i)).toBeTruthy();
        expect(screen.queryByText(/Enter Phone Number/i)).toBeNull();
        expect(screen.queryByText(/You will be receiving/i)).toBeNull();
        expect(screen.queryByText(/Send/i)).toBeNull();
    });
    it('should show modal on click', () => {
        fireEvent.click(screen.getByText(/Add/));
        expect(screen.getByText(/Enter Phone Number/i)).toBeTruthy();
        expect(screen.getByText(/You will be receiving/i)).toBeTruthy();
        expect(screen.getByText(/Send/i)).toBeTruthy();
    });
});
