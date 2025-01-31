import React from "react";
// bootstrap components
import { Button } from "react-bootstrap";

export default function RefreshUsersBtn({ generateNewData }) {
	return <Button onClick={generateNewData}>Refresh Users</Button>;
}
