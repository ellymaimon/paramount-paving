import gql from "graphql-tag";

export const getAllCustomers = gql`
 {
   allCustomers {
     data {
       _id
       firstName
       lastName
     }
   }
 }
`;
