import { gql } from '@apollo/client';

export const USER_PROFILE_QUERY = gql`
    {
        userProfile {
            id
            color
        }
    }
`;