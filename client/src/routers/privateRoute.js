import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// router that check the authenification context for a user and redirects to the login route if the user isn't authentificated
function PrivateRoute({ children, ...rest }) {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const authenticationToken = localStorage.getItem(AUTH_TOKEN);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authenticationToken
                    ? ( children )
                    : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateRoute;