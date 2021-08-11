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
    type Query {
        getMyUser: User
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        deleteBook(bookId: ID!): Book
    }
`

module.exports = typeDefs;