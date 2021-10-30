import React from 'react';
import { render, screen, fireEvent, act } from '../../../../scripts/utils';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';
import AddPhoneNumber from './AddPhoneNumber';
import { unmountComponentAtNode } from 'react-dom';
import '../../../../scripts/i18n';

const mockStore = configureStore([]);

describe('AddPhoneNumber component', () => {
    let store;
    let container = null;

    beforeEach(() => {
        store = mockStore({
            user: {
                id: 1,
                name: 'xyz name',
                email: 'xyz@mail.com',
                phoneNumber: '',
                status: true,
                active: true 
            }
        });
        container = document.createElement('div');
        document.body.appendChild(container);

        render( <AddPhoneNumber />, [], store, container );
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('renders correctly', () =>{

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
    it('should update the label for the phonenumber', async () => {
        await act( async () => {
            fireEvent.click(screen.getByText(/Add/));
        });
    });
    it('should show modal on click', () => {
        fireEvent.click(screen.getByText(/Add/));
        expect(screen.getByText(/Enter Phone Number/i)).toBeTruthy();
        expect(screen.getByText(/You will be receiving/i)).toBeTruthy();
        expect(screen.getByText(/Send/i)).toBeTruthy();
    });
    it('should close modal on click', async () => {

        fireEvent.click(screen.getByText(/Add/));
        expect(screen.getByText(/Enter Phone Number/i)).toBeTruthy();
     
        fireEvent.click(document.querySelector('.close'));
        expect(screen.queryByText(/Enter Phone Number/i)).toBeNull();
    });
});
