import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// custom components
import DisplayUsers from "./users/DisplayUsers";
import DisplayFavoriteUsers from "./users/DisplayFavoriteUsers";
import LoadMoreBtn from "./LoadMoreBtn";

export default function UsersList({ users }) {
	// State to store favorite users
	const [favorites, setFavorites] = useState([]);
	// State to store cookies
	const [cookies, setCookie] = useCookies(["favorite-users"]);
	//State to handle the number of users to be displayed
	const [visible, setVisible] = useState(10);

	// Function to add favorite user
	const addFavoriteUser = (user) => {
		// Check if user is already in favorites to prevent duplicates
		if (!favorites.some((favorite) => favorite.uid === user.uid)) {
			const newFavoriteList = [...favorites, user];
			setFavorites(newFavoriteList);
		}
	};

	// Function to remove favorite user
	const removeFavoriteUser = (user) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.uid !== user.uid
		);
		setFavorites(newFavoriteList);
	};

	// Function to load more users
	const loadMore = () => {
		setVisible(visible + 10);
	};

	// Save favorites to cookies
	useEffect(() => {
		if (favorites.length > 0) {
			setCookie("favorite-users", favorites, { path: "/" });
		}
	}, [favorites, setCookie]);

	return (
		<div className="container-flex">
			<div className="cards-container">
				{/* Favorite users */}
				<DisplayFavoriteUsers
					favorites={favorites}
					handleFavoritesClick={removeFavoriteUser}
				/>

				{/* All users */}
				<DisplayUsers
					users={users}
					visible={visible}
					handleFavoritesClick={addFavoriteUser}
				/>
			</div>
			{/* Load more button */}
			<LoadMoreBtn visible={visible} users={users} loadMoreClick={loadMore} />
		</div>
	);
}
