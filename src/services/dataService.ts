import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import { QueryService } from './queryService'

let client: ApolloClient<any> = null
let queryService: QueryService

export function setupDataService(uri: string) {
    client = new ApolloClient({
        uri,
        cache: new InMemoryCache()
    })
    queryService = new QueryService(client)
}

export const getClient = () => client
export const getQueryService = () => queryService