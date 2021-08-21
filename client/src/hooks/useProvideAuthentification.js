import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client'; 
import { useState } from 'react';

function useProvideAuth() {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

    const [user, setUser] = useState({
        name: '',
        email: '',
        birthday: '',
        password: ''
    });

    const [birthday, setBirthday] = useState({
        day: '',
        month: '',
        year: ''
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: user.email,
            password: user.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token);
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

    /**
     * 
     * @param {Event} e 
     */
    const handleSelect = (e) => {

        const { target } = e;
        const { name, value } = target;

        setBirthday({
            ...birthday,
            [name]: value
        });

        const { day, month, year} = birthday;

        setUser({
            ...user,
            birthday: `${day}.${month}.${year}`
        });
    };

    return {
        user,
        login,
        signup,   
        handleChange,
        handleSelect
    };
}

export default useProvideAuth;