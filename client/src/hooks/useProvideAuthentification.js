import { useState } from 'react'

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return ''
  };

  const signout = cb => {
    return ''
  };


  return {
    user,
    signin,
    signout
  };
};

export default useProvideAuth;