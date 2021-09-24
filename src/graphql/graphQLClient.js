import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:4000'

export const graphQLClientConn = new GraphQLClient(endpoint, { headers: {} })

