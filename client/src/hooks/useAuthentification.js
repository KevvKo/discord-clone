import { authContext } from '../contexts/authentificationContext';
import { useContext } from 'react';

const useAuth = () => {
    return useContext(authContext);
  }
  
export {useAuth};