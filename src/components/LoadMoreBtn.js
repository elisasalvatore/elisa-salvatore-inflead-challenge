import React from "react";
// bootstrap components
import Button from "react-bootstrap/Button";

export default function LoadMoreBtn({ visible, users, loadMoreClick }) {
	return (
		<div className="ctn-load-more-btn">
			{visible < users.length && (
				<Button variant="warning" onClick={loadMoreClick}>
					Load More
				</Button>
			)}
		</div>
	);
}
