import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = (email, password) => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          setUser(response.user);
          return response.user;
        });
    };
}