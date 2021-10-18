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
    it('should render appheader', async () => {

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
            await new Promise( resolve => setTimeout(resolve, 5));
        });
        expect(screen.getByTestId('app-header')).toBeTruthy();

    });
});
