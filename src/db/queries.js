import gql from "graphql-tag";

export const getAllCustomers = gql`
{
	allCustomers {
		data {
			_id
			firstName
			lastName
			telephone
			address {
				street
				city
				state
				zipCode
			}
		}
	}
}
`;
