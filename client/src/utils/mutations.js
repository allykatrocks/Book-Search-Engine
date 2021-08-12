import {gql} from '@apollo/client';

export const CREATE_USER = gql `
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
export const SAVE_BOOK = gql `
    mutation saveBook($bookArgs: bookInput!) {
        saveBook(bookArgs: $bookArgs) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                link
                image
            }
        }
    }
`

export const DELETE_BOOK = gql `
    mutation deleteBook($bookId: String!) {
        deleteBook(bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                link
                image
            }
        }
    }
`
export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`