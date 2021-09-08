import { gql } from '@apollo/client';

export const USERNAME_QUERY = gql`
    {
        user {
            id
            username
            status
            email
        }
    }
`;