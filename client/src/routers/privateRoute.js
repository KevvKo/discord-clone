import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuthentification'

// router that check the authenification context for a user and redirects to the login route if the user isn't authentificated
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
            true // auth.user -> quick solution until the whole process is correct implemented
            ? ( children )
            : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
            )
        }
        />
    );
}

export default PrivateRoute;