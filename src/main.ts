import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { resolvers } from './graphql/resolvers'
import { environment } from './environment'
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import * as db from './db'
import fs from 'fs'
import path from 'path'

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, '../schema.gql')).toString()
)

const server = new ApolloServer({
  typeDefs: [typeDefs, DIRECTIVES],
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

db.connect().then(() => {
  app.listen({ port: environment.port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${environment.port}${server.graphqlPath}`
    )
  )
})
