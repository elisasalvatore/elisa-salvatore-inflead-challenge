import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//custom components
import FavoriteBtn from "../FavoriteBtn";

export default function BackCard({ user }) {
	const { avatar, email, phone_number, address } = user;
	return (
		<Card className="card bg-dark text-white">
			{/* Card header */}
			<div className="card-header">
				{/* Favorite Button */}
				<FavoriteBtn />
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
