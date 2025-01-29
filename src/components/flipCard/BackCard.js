import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function BackCard({ user }) {
	const { first_name, last_name, avatar, email, phone_number, address } = user;
	return (
		<Card className="card bg-dark text-white">
			{/* Card header */}
			<div className="card-header">
				<Card.Title className="card-title">
					{first_name} {last_name}
				</Card.Title>
			</div>

			{/* Card image */}
			<Card.Img className="card-image" src={avatar} alt="User image" />
			<Card.ImgOverlay className="card-infos">
				{/* User infos */}
				<ListGroup>
					<ListGroup.Item>{email}</ListGroup.Item>
					<ListGroup.Item>{phone_number}</ListGroup.Item>
					<ListGroup.Item>{address.country}</ListGroup.Item>
				</ListGroup>
			</Card.ImgOverlay>
		</Card>
	);
}
