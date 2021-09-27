import { gql } from '@apollo/client';

export const USER_QUERY = gql`
    {
        user {
            id
            name
            status
            email
            phoneNumber
        }
    }
`;