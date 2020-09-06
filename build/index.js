"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const resolver_1 = require("./graphql/resolver");
const schema = load_1.loadSchemaSync(path_1.join(__dirname, '../schema.gql'), { loaders: [new graphql_file_loader_1.GraphQLFileLoader()] });
const server = new apollo_server_express_1.ApolloServer({
    schema,
    resolvers: resolver_1.resolvers,
    mocks: {
        Product: () => ({
            id: '101',
            name: '製品1',
        }),
        Brand: () => ({
            id: '10',
            name: 'ブランド1',
        }),
    },
});
const app = express_1.default();
server.applyMiddleware({ app });
const PORT = 3000;
app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
