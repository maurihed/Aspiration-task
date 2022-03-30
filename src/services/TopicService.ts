import { ApolloQueryResult } from "@apollo/client";
import { apolloClient } from "../apollo";
import { GET_TOPICS } from "../graphql/queries";

export const fetchTopics = (name: string): Promise<ApolloQueryResult<any>> => {
    return apolloClient.query({query: GET_TOPICS, variables: { name }});
};
