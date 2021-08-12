const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { countDocuments } = require("../models/User");

const resolvers = {
  Query: {
    getMyUser: async (parent, args, context, info) => {
      if (!context.user) {
        throw new AuthenticationError("Please log in");
      }
      const foundUser = await User.findOne({
        _id: context.user._id,
      });
      return foundUser;
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookArgs }, context) => {
      return User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { savedBooks: bookArgs } },
        { new: true }
      );
    },
    deleteBook: async (parent, { bookId }, context) => {
      return User.findByIdAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { _id: bookId } } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      console.log(email, password, "line 37");
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      console.log(correctPw);

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
