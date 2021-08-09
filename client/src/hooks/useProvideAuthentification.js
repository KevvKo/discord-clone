import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client'; 
import { useState } from 'react';

function useProvideAuth() {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: user.email,
            password: user.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token);
            console.log(222);
        },
        onError: (error) => { //returns the error to handle this one in the belonging page and form
            return error.message;
        }
    });

    const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
            username: user.name,
            email: user.email,
            password: user.password
        },
        onCompleted: ({ signup }) => {
            localStorage.setItem(AUTH_TOKEN, signup.token);
            
        }
    });

    /**
     * 
     * @param {Event} e 
     */
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setUser({
            ...user,
            [ name ]: value
        });
    };

    return {
        user,
        login,
        signup,   
        handleChange
    };
}

export default useProvideAuth;