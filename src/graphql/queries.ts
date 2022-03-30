import { gql } from "@apollo/client";

 export const GET_TOPICS = gql`
 query GetTopics($name: String!) {
   topic(name: $name) {
     relatedTopics {
       name
       stargazerCount
     }
   }
 }
`;
