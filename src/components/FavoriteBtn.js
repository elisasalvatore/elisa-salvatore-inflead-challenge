import React, { useState } from "react";
// react-icons component
import { FaHeart } from "react-icons/fa";

export default function FavoriteBtn() {
	const [isFav, setIsFav] = useState(false);

	return (
		<FaHeart
			className="heart-icon"
			onClick={() => setIsFav(!isFav)}
			style={{ color: isFav ? "red" : "white" }}
		/>
	);
}
