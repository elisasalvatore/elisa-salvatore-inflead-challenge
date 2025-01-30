import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//custom components
import FavoriteBtn from "../../FavoriteBtn";

export default function BackCard({ user, handleFavoritesClick }) {
	const { avatar, email, phone_number, address } = user;
	return (
		<Card className="card bg-dark text-white">
			<FavoriteBtn user={user} handleFavoritesClick={handleFavoritesClick} />

			{/* Card image */}
			<Card.Img src={avatar} alt="User image" />
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
