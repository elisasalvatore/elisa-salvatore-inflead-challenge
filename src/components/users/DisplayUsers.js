import React from "react";
// custom components
import UserCard from "../UserCard";

export default function DisplayUsers({ users, visible, handleFavoritesClick }) {
	return (
		<div className="cards">
			<div className="text-center w-100">
				<h1>Users</h1>
			</div>
			{/* Display all users */}
			{users.slice(0, visible).map((user, index) => {
				return (
					<UserCard
						key={index}
						user={user}
						handleFavoritesClick={handleFavoritesClick}
					/>
				);
			})}
		</div>
	);
}
