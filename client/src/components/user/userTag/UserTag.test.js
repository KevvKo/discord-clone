import React from 'react';
import UserTag from './UserTag';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
const mockStore = configureStore([]);
 
describe('UserAvatar', () => {
    let store; 
    let component;
    beforeEach(() => {
        store = mockStore({
            user: {
                id: 1,
                name: 'xyz name',
                email: 'xyz@mail.com',
                phoneNumber: '12345678',
                status: true,
                active: true 

            }
        });

        component = renderer.create( 
            <Provider store={store}>
                <UserTag />
            </Provider>
        );
    });
    it('should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
        act( () => {
            expect(
                component.root.findAllByType('div')[1].props.children
            ).toEqual('xyz name');
            expect(
                component.root.findAllByType('div')[2].props.children
            ).toEqual(1);
        });
    });
});
