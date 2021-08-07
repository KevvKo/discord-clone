import { useState } from 'react';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client'; 
import useForm from '../hooks/useForm';

function useProvideAuth() {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

    const {user} = useForm();

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: user.email,
            password: user.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token);

        },
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


    return {
        login,
        signup,   
    };
}

export default useProvideAuth;