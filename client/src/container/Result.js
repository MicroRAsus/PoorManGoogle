import React from "react";

const Result = (props) => {
	return (
		<div>
			 <a href={"/files/" + props.url}>{props.url}</a>
		</div>
	);
}

export default Result;
