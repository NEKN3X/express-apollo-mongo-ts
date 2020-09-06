import { join } from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { resolvers } from './graphql/resolver'

const schema = loadSchemaSync(join(__dirname, '../schema.gql'), {
  loaders: [new GraphQLFileLoader()],
})

const server = new ApolloServer({
  schema,
  resolvers,
  mocks: {
    Person: () => ({
      id: '101',
      name: 'Alex',
      phone: '0000-00-0000',
    }),
    Address: () => ({
      city: 'London',
      street: '123 Main St',
    }),
  },
})

const app = express()
server.applyMiddleware({ app })

const PORT = 3000

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
