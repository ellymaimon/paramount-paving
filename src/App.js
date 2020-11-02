import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./db/client";
import CustomersList from "./CustomersList";
import CustomerForm from "./CustomerForm";

export default function App() {
 return (
   <ApolloProvider client={client}>
     <div style={{ padding: "5px" }}>
       <h3>Paramount Paving</h3>
       <CustomersList/>
       <CustomerForm/>
     </div>
   </ApolloProvider>
 );
}