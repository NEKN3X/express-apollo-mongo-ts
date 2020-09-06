import { QueryResolvers, Product } from './graphql'

const Query: QueryResolvers = {
  product: () => ({} as Product),
}

export const resolvers = {
  Query,
}
