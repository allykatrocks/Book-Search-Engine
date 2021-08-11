import { gql } from '@apollo/client';

export const QUERY_USER = gql `
    query getMyUser {
        user {
            _id
            username
            email
            password
            savedBooks
        }
    }
`