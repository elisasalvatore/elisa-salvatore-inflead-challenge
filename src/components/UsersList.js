import React from "react";
// custom components
import UserCard from "./UserCard";
import FavoriteBtn from "./FavoriteBtn";

export default function UsersList({ user, handleFavoritesClick }) {
	return (
		<>
			<div key={user.uid}>
				<FavoriteBtn user={user} handleFavoritesClick={handleFavoritesClick} />
				<UserCard user={user} />
			</div>
		</>
	);
}
