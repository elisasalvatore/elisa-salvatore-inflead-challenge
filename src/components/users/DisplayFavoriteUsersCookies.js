import React from "react";
// custom components
import UserCard from "./UserCard";

export default function DisplayFavoriteUsersCookies({
	cookies,
	handleFavoritesClick,
}) {
	return (
		<div className="cards">
			{cookies["favorite-users"] && cookies["favorite-users"].length > 0 && (
				<>
					<div className="text-center w-100">
						<h1>Favorites</h1>
					</div>
					{/* Displaying favorite users */}
					{cookies["favorite-users"].map((user, index) => (
						<>
							<UserCard
								key={index}
								user={user}
								handleFavoritesClick={handleFavoritesClick}
							/>
						</>
					))}
				</>
			)}
		</div>
	);
}
