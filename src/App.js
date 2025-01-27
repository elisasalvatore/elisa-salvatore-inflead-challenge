import "./App.css";
import { useEffect, useState } from "react";
// components
import UserCard from "./components/UserCard";

function App() {
	//API URL
	const apiUrl = "https://random-data-api.com/api/users/random_user?size=10";
	// State to store the fetched data
	const [data, setData] = useState([]);

	// Fetch data from the API when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				const result = await response.json();
				setData(result);
				console.log(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="App">
			<div className="cards-container">
				{/* Render the fetched data */}
				{data.map((user) => (
					<UserCard user={user} key={user.id} />
				))}
			</div>
		</div>
	);
}

export default App;
