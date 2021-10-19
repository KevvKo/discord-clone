import React from 'react';
import Home from './Home';
import '../../scripts/i18n';
import { render, screen, act } from '../../scripts/utils';
import { USER_QUERY } from '../../graphql/user/userQuery';


describe('Home component', () => {
    it('should render', () => {
        render(
            <Home />
        );
    });
    it('should render loading', () => {
        render( <Home /> );
        expect(screen.getByText('loading...')).toBeTruthy();
    });
    it('should render components', async () => {

        const mocks = [
            {
                request: {
                    query: USER_QUERY,
                },
                result: {
                    data: {
                        user: {
                            id: '4',
                            name: 'Hans Müller',
                            email: 'test.tt@gg.com',
                            status: true,
                            phoneNumber: '0153543255',
                            active: true
                        },
                    }
                }
            }
        ];
        
        await act( async () => {
            render( <Home />, mocks );
            await new Promise( resolve => setTimeout(resolve, 0));
        });

        expect(screen.getByTestId('app-header')).toBeTruthy();
        expect(screen.getByTestId('app-main')).toBeTruthy();
        expect(screen.getByTestId('channel-list')).toBeTruthy();
        expect(screen.getByTestId('search-field')).toBeTruthy();
        expect(screen.getByTestId('friends-list')).toBeTruthy();
        expect(screen.getByTestId('user-bar')).toBeTruthy();
        expect(screen.getByTestId('active-user-list')).toBeTruthy();
    });
    it('should render error state', async () => {

        const mocks = [
            {
                request: {
                    query: USER_QUERY
                },
                error: new Error('An error occurred'),
            }
        ];
        
        await act( async () => {
            render( <Home />, mocks );
            await new Promise( resolve => setTimeout(resolve, 0));
        });
        expect(screen.getByText('An error occurred')).toBeTruthy();
    });
});
