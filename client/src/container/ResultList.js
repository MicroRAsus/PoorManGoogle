import React from "react";
import Result from "./Result.js";

const ResultList = (props) => {
	return (
		<div>
			{props.results ? props.results.map(result => <Result {...result}/>) : undefined}
		</div>
	);
}

export default ResultList;
