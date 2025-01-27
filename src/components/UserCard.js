import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";
// react-icons
import { FaHeart } from "react-icons/fa";

export default function UserCard({ user }) {
	return (
		<>
			{/* Front of the card */}
			<Card className="card bg-dark text-white">
				{/* Favorite icon */}
				<FaHeart className="heart-icon" />
				{/* Card body */}
				<Card.Img className="card-image" src={user.avatar} alt="User image" />
				<Card.ImgOverlay className="card-infos">
					<Card.Title className="card-title">
						{user.first_name} {user.last_name}
					</Card.Title>
					<Card.Text className="card-text">{user.employment.title}</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</>
	);
}
