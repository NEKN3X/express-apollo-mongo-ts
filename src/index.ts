import { join } from 'path'
import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { resolvers } from './graphql/resolver'
import * as dotenv from 'dotenv'

dotenv.config()
const DB_PASSWORD = process.env.DB_PASSWORD || 'PASSWORD'
const DB_NAME = process.env.DB_NAME || 'NAME'

mongoose.set('useFindAndModify', false)
const MONGODB_URI = `mongodb+srv://nekn3x:${DB_PASSWORD}@gcp-cluster-tokyo.pdubx.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
console.log('connecting to', MONGODB_URI)
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error)
  })

mongoose.Promise = global.Promise

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Hello world!',
  date: new Date(),
  important: true,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})

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
