"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_import_1 = require("graphql-import");
const resolver_1 = require("./graphql/resolver");
const typeDefs = graphql_import_1.importSchema('./graphql/schema.gql');
const server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers: resolver_1.resolvers,
    mocks: {
        Product: () => ({
            id: '1',
            name: '製品1',
        }),
        Brand: () => ({
            id: '1',
            name: 'ブランド1',
        }),
    },
});
const app = express_1.default();
server.applyMiddleware({ app });
const PORT = 3000;
app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
