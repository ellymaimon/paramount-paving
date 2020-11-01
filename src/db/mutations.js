import gql from "graphql-tag";

export const createCustomer = gql`
 mutation CreateCustomer($data: CustomerInput!) {
   createCustomer(data: $data) {
     _id
   }
 }
`;