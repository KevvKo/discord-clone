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
        localStorage.setItem(AUTH_TOKEN, login.token)
    }
  });

  const signin = async (data) => {
    setUser({
      ...user,
      email: data.email,
      password: data.password
    })
    login()
  };

  const signout = () => {

  };


  return {
    user,
    signin,
    signout
  };
};

export default useProvideAuth;