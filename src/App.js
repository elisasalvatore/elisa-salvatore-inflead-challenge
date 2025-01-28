import "./App.css";
import { useEffect, useState } from "react";
// custom components
import UsersList from "./components/UsersList";

//API URL
const apiUrl = "https://random-data-api.com/api/users/random_user?size=10";

function App() {
	// State to store the fetched data
	const [users, setUsers] = useState([]);

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

	return (
		<div className="App">
			<div className="cards-container">
				{/* All users */}
				<UsersList users={users} />
			</div>
		</div>
	);
}

export default App;
