import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CustomerCard( props ) {
	const { firstName, lastName, telephone, address } = props.customer;

	return (
		<Card>
			<Card.Content>
				<Image
					floated='right'
					size='mini'
					src='/images/avatar/large/steve.jpg'
				/>
				<Card.Header>{firstName} {lastName}</Card.Header>
				<Card.Meta>{formatAddress(address)}</Card.Meta>
				<Card.Meta>{formatPhone(telephone)}</Card.Meta>
				<Card.Description>
					A generic description may go here?
				</Card.Description>
			</Card.Content>
		</Card>
	);
}