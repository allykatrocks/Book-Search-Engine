const {User} = require("../models");
const {signToken} = require("../utils/auth");
const {AuthenticationError} = require('apollo-server-express');
const { countDocuments } = require("../models/User");

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
        createUser: async (parent, args) => {
            // const user = await 
        }
        // saveBook,
        // deleteBook,
        // login,
    }
}

module.exports = resolvers;






