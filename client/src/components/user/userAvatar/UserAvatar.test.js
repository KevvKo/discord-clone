import React from 'react';
import UserAvatar from './UserAvatar';
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
                <UserAvatar />
            </Provider>
        );
    });
    it('should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
        act( () => {
            expect(component.root.findByType('i').props.style.fontSize).toBe('1.666rem');
            expect(component.root.findByProps({'data-testid': 'user-avatar'})
                .props.className).toBe('user-avatar mr-2');
            expect(component.root.findByProps({className: 'active-user d-inline-block'})).toBeTruthy();
        });
    });
    it('should change the classes', () => {
        component = renderer.create( 
            <Provider store={store}>
                <UserAvatar cssClasses={'xyz'} />
            </Provider>
        );
        expect(component.root.findByProps({className: 'user-avatar mr-2 xyz'})).toBeTruthy();
    });
    it('should change the fontSize', () => {
        component = renderer.create( 
            <Provider store={store}>
                <UserAvatar fontSize='1' />
            </Provider>
        );
        expect(component.root.findByType('i').props.style.fontSize).toBe('1rem');
    });
});
