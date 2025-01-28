import React from "react";
// custom components
import UserCard from "./UserCard";

export default function UsersList({ users }) {
	return (
		<>
			{/* Render all users */}
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</>
	);
}
