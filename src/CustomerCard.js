import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CustomerCard( props ) {
	const { firstName, lastName, telephone, address } = props.customer;

	const formatPhone = ( telephone ) => {
		if ( telephone.length === 10) {
			console.log('telephone', telephone)
			const phoneArray = telephone.split('');
			console.log('phoneArray', phoneArray)
			phoneArray.splice(0, 0, "(");
			console.log('phoneArray', phoneArray)

			phoneArray.splice(4, 0, ") ");
			console.log('phoneArray', phoneArray)

			phoneArray.splice(8, 0, "-");
			console.log('phoneArray', phoneArray)

			return phoneArray.join('');
		}
		return telephone;
	};

	const formatAddress = ( address ) => {
		
	}

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