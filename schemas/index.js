const axios = require('axios');
const {
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType
} = require('graphql');

const DestinationTypes = require('./destination.types');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'QueryRoot',
    fields: {
      allDestination: {
        type: new GraphQLList(DestinationTypes),
        resolve: async () => {
          try {
            const { data } = await axios.get('http://34.73.189.70/destination');
            return data.data;
          } catch (err) {
            console.log('error', err);
          }
        }
      }
    }
  })
});

module.exports = schema;
