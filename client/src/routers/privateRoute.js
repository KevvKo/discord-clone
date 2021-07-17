import { Route, Redirect } from 'react-router-dom';
// router that check the authenification context for a user and redirects to the login route if the user isn't authentificated
function PrivateRoute({ children, ...rest }) {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const authenticationToken = localStorage.getItem(AUTH_TOKEN)

    return (
        <Route
            {...rest}
            render={({ location }) =>
            authenticationToken
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