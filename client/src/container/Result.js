import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
	return (
		<div>
			 <Link to={"/files/" + props.url}>{props.url}</Link>
		</div>
	);
}

export default Result;
