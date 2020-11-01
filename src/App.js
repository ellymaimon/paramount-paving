import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./db/client";
import { CustomersList } from "./CustomersList";

export default function App() {
 return (
   <ApolloProvider client={client}>
     <div style={{ padding: "5px" }}>
       <h3>Paramount Paving</h3>
       <CustomersList/>
     </div>
   </ApolloProvider>
 );
}