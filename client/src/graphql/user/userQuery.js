import { gql } from '@apollo/client';

export const USER_QUERY = gql`
    {
        user {
            id
            username
            status
            email
            phoneNumber
        }
    }
`;