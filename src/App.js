import "./App.css";
import React, { useEffect, useState } from "react";
// custom components
import UsersList from "./components/users/UsersList";
import LoadingComponent from "./components/LoadingComponent";

//API URL
const apiUrl = "https://random-data-api.com/api/users/random_user?size=50";

function App() {
	// State to store the fetched data
	const [users, setUsers] = useState([]);
	// State to handling the initial loader
	const [isLoading, setIsLoading] = useState(false);

	// Fetch data from the API
	const fetchData = async () => {
		// Turn on the loader
		setIsLoading(true);
		try {
			const response = await fetch(apiUrl);
			const result = await response.json();
			setUsers(result);
			console.log("FETCH DATA:", result);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			// Turn off the loader
			setIsLoading(false);
		}
	};

	// Fetch data from the API when the component mounts
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<div>
				{/* Showing Loading component */}
				{isLoading ? (
					<LoadingComponent />
				) : (
					<>
						{/* Showing Users Cards */}
						<UsersList
							users={users}
							key={users.id}
							generateNewData={fetchData}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
