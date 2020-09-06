import { QueryResolvers, Product } from './graphql'

const Query: QueryResolvers = {
  // product: async (_parent, args, _context, _info) => ({} as Product),
  product: async (_parent, _context, _info) => ({} as Product),
}

export const resolvers = {
  Query,
}
