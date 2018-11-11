import { Link } from "react-router-dom";

export default const Result = (props) => {
	return (
		<div>
			 <Link to={"/" + this.props.url}>{this.props.url}</Link>
			 <h1>Weight: {this.props.w}</h1>
		</div>
	);
}
