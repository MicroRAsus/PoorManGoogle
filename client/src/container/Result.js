import React from "react";
import "./Result.css";

const Result = (props) => {
	return (
		<div className="Result">
			 <a className="Result-left" href={"/files/" + props.url}>{props.url}</a>
			 <div className="Result-right">{props.w}</div>
		</div>
	);
}

export default Result;
