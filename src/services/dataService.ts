import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'

let client: ApolloClient<any> = null


export function createClient(uri: string) {
    client = new ApolloClient({
        uri,
        cache: new InMemoryCache()
    })
    return client
}

export const getClient = () => client