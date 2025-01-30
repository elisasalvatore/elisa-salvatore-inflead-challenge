import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";

export default function FrontCard({ user }) {
	const { avatar, first_name, last_name, employment } = user;

	return (
		<Card className="card bg-dark text-white">
			<div className="card-header"></div>
			{/* Card image */}
			<Card.Img src={avatar} alt="User image" />
			<Card.ImgOverlay className="card-infos">
				<Card.Title>
					{first_name} {last_name}
				</Card.Title>
				<Card.Text>{employment.title}</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}
