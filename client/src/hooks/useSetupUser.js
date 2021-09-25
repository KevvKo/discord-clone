
// Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setUser } from '../store/slices/userSlice';
// Querys
import { USER_QUERY } from '../graphql/user/userQuery';

export const useSetupUser = () => {

    const {error, loading, data } = useQuery( USER_QUERY);
    const dispatch = useDispatch();

    useEffect( () => {
        if( data ) {
            dispatch(setUser(data.user));
        }
    }, [ data ]); 

    return {
        error,
        loading
    };
};

