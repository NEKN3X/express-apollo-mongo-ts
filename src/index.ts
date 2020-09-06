import { join } from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { resolvers } from './graphql/resolver';

const schema = loadSchemaSync(join(__dirname, '../schema.gql'), {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema,
  resolvers,
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

const app = express();
server.applyMiddleware({ app });

const PORT = 3000;

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
