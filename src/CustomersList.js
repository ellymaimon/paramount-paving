import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getAllCustomers } from "./db/queries";
import CustomerCard from "./CustomerCard";

export default function CustomersList() {
	const { data, loading } = useQuery(getAllCustomers);

	if (loading) {
		return "Loading...";
	}

	return (
		<ul>
			{data.allCustomers.data.map((customer) => {
				return (
					<CustomerCard
						key={customer._id}
						customer={customer}
					/>
				);
			})}
		</ul>
	);
}