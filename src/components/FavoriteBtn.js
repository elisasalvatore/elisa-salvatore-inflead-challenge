import React from "react";
// react-icons component
import { FaHeart } from "react-icons/fa";

export default function FavoriteBtn({ user, handleFavoritesClick }) {
	return (
		<>
			<FaHeart
				className="heart-icon"
				onClick={() => handleFavoritesClick(user)}
			/>
		</>
	);
}
