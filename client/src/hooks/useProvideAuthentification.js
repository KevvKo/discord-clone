import { useState } from 'react'
import { LOGIN_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'; 

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
      }
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setUser({
        ...user,
        [ name ]: value
    })
  }

  return {
    user,
    login,
    handleChange
  };
};

export default useProvideAuth;