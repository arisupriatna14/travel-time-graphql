const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const attractionTypes = new GraphQLObjectType({
  name: 'AttractionType',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    images: {
      type: GraphQLString
    }
  }
});

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
    },
    attraction: {
      type: GraphQLList(GraphQLNonNull(attractionTypes))
    }
  }
});

module.exports = DestinationTypes;
