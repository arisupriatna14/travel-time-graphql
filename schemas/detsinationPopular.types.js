const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const attractionTypes = new GraphQLObjectType({
  name: 'AttractionPopularTypes',
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

const DestinationPopularTypes = new GraphQLObjectType({
  name: 'DestinationPopularTypes',
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

module.exports = DestinationPopularTypes;
