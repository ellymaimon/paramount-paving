import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getAllCustomers } from "./db/queries";
import CustomerCard from "./CustomerCard";
import { Card } from "semantic-ui-react";

export default function CustomersList() {
	const { data, loading } = useQuery(getAllCustomers);

	if (loading) {
		return "Loading...";
	}

	return (
		<Card.Group>
			{data.allCustomers.data.map((customer) => {
				return (
					<CustomerCard
						key={customer._id}
						customer={customer}
					/>
				);
			})}
		</Card.Group>
	);
}