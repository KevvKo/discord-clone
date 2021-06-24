import { authContext } from '../contexts/authentificationContext';
import useProvideAuth from '../hooks/useProvideAuthentification';


export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    ) 
}