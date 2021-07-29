import { useState } from 'react'
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'; 

function useProvideAuth() {

  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [ errors, setErrors ] = useState({
    emailError: false,
    passwordError: false
  })
 
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
        email: user.email,
        password: user.password
    },
    onCompleted: ({ login }) => {
        localStorage.setItem(AUTH_TOKEN, login.token);
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
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setUser({
        ...user,
        [ name ]: value
    })
  }

  return {
    user,
    login,
    signup,
    handleChange
  };
};

export default useProvideAuth;