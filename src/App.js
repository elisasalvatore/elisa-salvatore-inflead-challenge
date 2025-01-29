import "./App.css";
import { useEffect, useState } from "react";
// custom components
import UsersList from "./components/UsersList";

//API URL
const apiUrl = "https://random-data-api.com/api/users/random_user?size=10";

function App() {
	// State to store the fetched data
	const [users, setUsers] = useState([]);
	const [favorites, setFavorites] = useState([]);

	// Fetch data from the API when the component mounts
	const fetchData = async () => {
		try {
			const response = await fetch(apiUrl);
			const result = await response.json();
			setUsers(result);
			console.log("RESULT:", result);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const addFavoriteUser = (user) => {
		// Check if user is already in favorites to prevent duplicates
		if (!favorites.some((favorite) => favorite.uid === user.uid)) {
			const newFavoriteList = [...favorites, user];
			setFavorites(newFavoriteList);
		}
	};

	const removeFavoriteUser = (user) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.uid !== user.uid
		);
		setFavorites(newFavoriteList);
	};

	return (
		<div className="App">
			<div className="cards-container">
				<div className="cards">
					{/* Handling title of Fav users */}
					{favorites && favorites.length > 0 ? (
						<div className="text-center w-100">
							<h2>Favorites</h2>
						</div>
					) : (
						<h2>Favorites: 0</h2>
					)}
					{/* Fav users */}
					{favorites &&
						favorites.length > 0 &&
						favorites.map((user, index) => (
							<UsersList
								key={index}
								user={user}
								handleFavoritesClick={removeFavoriteUser}
							/>
						))}
				</div>

				<div className="cards">
					<div className="text-center w-100">
						<h2>Users</h2>
					</div>
					{/* All users */}
					{users.map((user, index) => (
						<UsersList
							key={index}
							user={user}
							handleFavoritesClick={addFavoriteUser}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
