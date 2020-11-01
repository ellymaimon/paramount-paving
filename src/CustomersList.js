import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getAllCustomers } from "./db/queries";

export function CustomersList() {
	const { data, loading } = useQuery(getAllCustomers);
	if (loading) {
		return "Loading...";
	}
	return (
		<ul>
			{data.allCustomers.data.map((customer) => {
				return <li key={customer._id}>{customer.firstName} {customer.lastName}</li>;
			})}
		</ul>
	);
}