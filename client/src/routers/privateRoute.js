import { Route, Redirect } from 'react';
import useAuth from '../hooks/useAuthentification'

// router that check the authenification context for a user and redirects to the login route if the user isn't authentificated
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
            auth.user 
            ? ( children )
            : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
        />
    );
}

export default PrivateRoute;