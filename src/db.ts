import { MongoClient } from 'mongodb'
import { environment } from './environment'

export async function connect() {
  const client = await MongoClient.connect(environment.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = client.db(environment.db.name)
  console.log(`Connected to ${db}`)
}
