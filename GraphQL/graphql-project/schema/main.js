const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const queryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => "world"
        }
    }
});

const mySchema = new GraphQLSchema({
    //root query & root mutation definitions
    query: queryType
});

module.exports = mySchema;