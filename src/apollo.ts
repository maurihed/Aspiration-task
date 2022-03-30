import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const initClient = () => {
    const httpLink = createHttpLink({
        uri: process.env.REACT_APP_GRAPHQL_SERVER_URL || '',
    });

    const authLink = setContext((_, { headers }) => {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        return {
          headers: {
            ...headers,
            authorization: token && `Bearer ${token}`,
          }
        }
      });

    apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });
}

export {
    apolloClient,
    initClient,
};
