import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qaoaat3q7701xlfww156l2/master',
  cache: new InMemoryCache()
})