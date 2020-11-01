import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log('process.env.REACT_APP_DB_KEY', process.env.REACT_APP_DB_KEY)

export const client = new ApolloClient({
 uri: "https://graphql.fauna.com/graphql",
 headers: {
   authorization: `Bearer ${process.env.REACT_APP_DB_KEY}`,
 },
 cache: new InMemoryCache(),
});