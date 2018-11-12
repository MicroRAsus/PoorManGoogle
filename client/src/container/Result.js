import React from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
	return (
		<div>
			 <Link to={"/files/" + props.url}>{props.url}</Link>
			 <h1>Weight: {props.w}</h1>
		</div>
	);
}

export default Result;
