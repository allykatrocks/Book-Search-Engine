const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String!
        image: String
        link: String
        title: String!
    }
    input bookInput {
        bookId: ID!
        authors: [String]
        description: String!
        image: String
        link: String
        title: String!
    }
    type Auth {
        token: ID!
        user: User
      }
    type Query {
        getMyUser: User
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookArgs: bookInput!): User
        deleteBook(bookId: ID!): User
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;