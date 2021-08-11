const {User} = require("../models");
const {signToken} = require("../utils/auth");
const {AuthenticationError} = require('apollo-server-express');
const { countDocuments } = require("../models/User");
const {User, Book} = require('../models');

const resolvers = {
    Query: {
        getMyUser: async (parent, args, context, info) => {
            if (!context.user) {throw new AuthenticationError('Please log in')}
        const foundUser = await User.findOne({
            _id: context.user._id
        })
        return foundUser
    }
    },
    Mutation: {
        createUser: async (parent, {username, email, password}) => {
            return User.create({username, email, password});
        },
        // saveBook,
        deleteBook: async (parent, {bookId}) => {
            return Book.findOneAndDelete({_id: bookId});
        }
        // login,
    }
}

module.exports = resolvers;






