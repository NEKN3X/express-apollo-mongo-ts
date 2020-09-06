import { QueryResolvers, Person } from './graphql'

const Query: QueryResolvers = {
  personCount: () => 2,
  allPersons: () => ({} as Person[]),
  findPerson: () => ({} as Person),
}

export const resolvers = {
  Query,
}
