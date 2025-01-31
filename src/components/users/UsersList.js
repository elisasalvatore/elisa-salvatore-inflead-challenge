import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// custom components
import DisplayUsers from "./DisplayUsers";
import DisplayFavoriteUsersCookies from "./DisplayFavoriteUsersCookies";
import LoadMoreBtn from "../LoadMoreBtn";

export default function UsersList({ users }) {
	// State to store favorite users
	const [favorites, setFavorites] = useState([]);
	// State to store cookies
	const [cookies, setCookie, removeCookie] = useCookies(["favorite-users"]);
	//State to handle the number of users to be displayed
	const [visible, setVisible] = useState(10);

	// Function to add favorite user
	const addFavoriteUser = (user) => {
		// Check if user is already in favorites to prevent duplicates
		if (!favorites.some((favorite) => favorite.uid === user.uid)) {
			// Add user to favorites list
			const newFavoriteList = [...favorites, user];
			setFavorites(newFavoriteList);

			// Add user to cookies list (displayed)
			const newCookiesList = [...cookies["favorite-users"], user];
			setFavorites(newCookiesList);

			// Add user to cookies
			setCookie("favorite-users", newFavoriteList, { path: "/" });
		}
	};

	// Function to remove favorite user
	const removeFavoriteUser = (user) => {
		// Remove user from favorites list
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.uid !== user.uid
		);
		setFavorites(newFavoriteList);

		// Remove user from cookies list (displayed)
		const newCookiesList = cookies["favorite-users"].filter(
			(favorite) => favorite.uid !== user.uid
		);
		setFavorites(newCookiesList);

		// Remove cookies
		removeCookie(["favorite-users"], { path: "/" });
	};

	// Function to load more users
	const loadMore = () => {
		setVisible(visible + 10);
	};

	// UseEffect to set cookies when favorites change
	useEffect(() => {
		if (favorites.length > 0) {
			setCookie("favorite-users", favorites, { path: "/" });
		}
	}, [favorites, setCookie]);

	return (
		<div className="container-flex">
			<div className="cards-container">
				{/* Favorite users */}
				<DisplayFavoriteUsersCookies
					cookies={cookies}
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
