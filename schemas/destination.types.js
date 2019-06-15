const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType
} = require('graphql');

const DestinationTypes = new GraphQLObjectType({
  name: 'DestinationTypes',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    images: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
});

module.exports = DestinationTypes;
