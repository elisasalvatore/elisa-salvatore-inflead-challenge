import React from "react";
// bootstrap components
import Button from "react-bootstrap/Button";

export default function LoadMoreBtn({ visible, users, loadMoreClick }) {
	return (
		<>
			{visible < users.length && (
				<Button className="mx-2" variant="outline-info" onClick={loadMoreClick}>
					Load More
				</Button>
			)}
		</>
	);
}
