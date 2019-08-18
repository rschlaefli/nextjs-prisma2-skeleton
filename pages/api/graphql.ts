import Photon from '@generated/photon'
import { ApolloServer, gql } from 'apollo-server-micro'

const photon = new Photon()

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }
  type Query {
    users: [User!]!
  }
`

const resolvers = {
  Query: {
    async users(parent, args, context) {
      return photon.users.findMany()
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
