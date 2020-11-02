import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { getAllCustomers } from "./db/queries";
import * as mutations from "./db/mutations";
import { Button, Form, Message } from "semantic-ui-react";

export function AddItem() {
	const [showForm, setShowForm] = React.useState(false);
	const [formError, setFormError] = React.useState(false);
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [telephone, setTelephone] = React.useState("");
	const [street, setStreet] = React.useState("");
	const [city, setCity] = React.useState("");
	const [state, setState] = React.useState("");
	const [zipCode, setZipCode] = React.useState("");

	const [createCustomer, { loading }] = useMutation(mutations.createCustomer, {
		refetchQueries: [{ query: getAllCustomers }],
		onCompleted: () => {
			setFirstName("");
			setShowForm(false);
		},
	});

	const handleSubmit = e => {
		e.preventDefault();

		if (
			!firstName ||
			!lastName ||
			!telephone ||
			!street ||
			!city ||
			!state ||
			!zipCode
		) {
			setFormError(true);
			return;
		}

		setFormError(false);

		createCustomer({
			variables: {
				data: {
					firstName,
					lastName,
					address: {
						data: {
							street,
							city,
							state,
							zipCode,
						}
					},
					telephone,
				}
			}
		});
	}

	if (showForm) {
		return (
			<Form onSubmit={handleSubmit} error={formError}>
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder='First Name'
						disabled={loading}
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder='Last Name'
						disabled={loading}
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Telephone</label>
					<input
						placeholder='Phone Number'
						disabled={loading}
						type="text"
						value={telephone}
						onChange={(e) => setTelephone(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Street</label>
					<input
						placeholder='Street'
						disabled={loading}
						type="text"
						value={street}
						onChange={(e) => setStreet(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>City</label>
					<input
						placeholder='City'
						disabled={loading}
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>State</label>
					<input
						placeholder='State'
						disabled={loading}
						type="text"
						value={state}
						onChange={(e) => setState(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>ZipCode</label>
					<input
						placeholder='Zip Code'
						disabled={loading}
						type="text"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</Form.Field>
				<Message
					error
					header='Whoops!'
					content='Please make sure to fill out all fields.'
				/>
				<Button type='submit'>Submit</Button>
			</Form>
		);
	}

	return <button onClick={() => setShowForm(true)}>Add Customer</button>;
}