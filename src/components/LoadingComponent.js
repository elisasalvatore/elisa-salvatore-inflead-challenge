import Spinner from "react-bootstrap/Spinner";

function LoadingComponent() {
	return (
		<div className="ctn-loading">
			<Spinner animation="border" variant="primary" role="status" />
		</div>
	);
}

export default LoadingComponent;
