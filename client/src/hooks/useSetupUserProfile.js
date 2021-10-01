
// Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setProfileColor } from '../store/slices/userProfileSlice';
// Querys
import { USER_PROFILE_QUERY } from '../graphql/userProfile/userProfileQuery';

export const useSetupUserProfile = () => {

    const { error, loading, data } = useQuery( USER_PROFILE_QUERY );
    const dispatch = useDispatch();

    useEffect( () => {
        if( data ) {
            dispatch(setProfileColor(data.userProfile?.color));
        }
    }, [ data ]); 

    return {
        error,
        loading
    };
};

