import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";

export default function FrontCard({ user }) {
	const { avatar, first_name, last_name, employment } = user;
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
				<Card.Text className="card-text">{employment.title}</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}
