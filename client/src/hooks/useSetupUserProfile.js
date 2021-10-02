
// Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setUserProfile } from '../store/slices/userProfileSlice';
// Querys
import { USER_PROFILE_QUERY } from '../graphql/userProfile/userProfileQuery';

export const useSetupUserProfile = () => {

    const { error, loading, data } = useQuery( USER_PROFILE_QUERY );
    const dispatch = useDispatch();

    useEffect( () => {
        if( data ) {
            dispatch( setUserProfile(data.userProfile) );
        }
    }, [ data ]); 

    return {
        error,
        loading
    };
};

