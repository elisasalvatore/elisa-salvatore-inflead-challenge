import React from "react";
// reactjs-flip-card
import ReactFlipCard from "reactjs-flip-card";
// custom components
import FrontCard from "./flipCard/FrontCard";
import BackCard from "./flipCard/BackCard";

export default function UserCard({ user }) {
	const containerStyle = {
		width: "300px",
		height: "400px",
		display: "flex",
		flexWrap: "flex-wrap",
		justifyContent: "space-around",
		alignItems: "center",
		margin: "10px",
	};

	return (
		<>
			<ReactFlipCard
				containerStyle={containerStyle}
				// Front Card
				frontComponent={<FrontCard user={user} />}
				// Back Card
				backComponent={<BackCard user={user} />}
			/>
		</>
	);
}
