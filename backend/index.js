//const { ApolloServer} = require('apollo-server-express');
const { ApolloServer} = require('apollo-server');
const { typeDefs} = require('./GraphQL/schema');
const { resolvers} = require('./GraphQL/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

// const express = require('express');
// const app = express();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
// );


server.listen().then(({ url }) => console.log(`Server ready at ${url}`))







