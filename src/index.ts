import { join } from 'path'
import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { resolvers } from './graphql/resolvers'
import { environment } from './environment'

mongoose
  .connect(environment.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error)
  })
mongoose.Promise = global.Promise

// const noteSchema = new mongoose.Schema({
//   content: String,
//   date: Date,
//   important: Boolean,
// })
// const Note = mongoose.model('Note', noteSchema)
// const note = new Note({
//   content: 'Hello world!!!',
//   date: new Date(),
//   important: true,
// })
// note.save().then(() => {
//   console.log('note saved')
//   mongoose.connection.close()
// })

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
app.listen({ port: environment.port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${environment.port}${server.graphqlPath}`
  )
)
