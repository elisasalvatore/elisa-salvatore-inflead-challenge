import React from "react";
// custom components
import UserCard from "../UserCard";

export default function DisplayFavoriteUsers({
	favorites,
	handleFavoritesClick,
}) {
	return (
		<div className="cards">
			{favorites && favorites.length > 0 && (
				<>
					<div className="text-center w-100">
						<h1>Favorites</h1>
					</div>
					{/* Displaying favorite users */}
					{favorites.map((user, index) => (
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
