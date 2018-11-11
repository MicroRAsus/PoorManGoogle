import "./Result.js";

export default const ResultList = (props) => {
	return (
		<div>
			{this.props.results.map(result => <Result {...result}/>)}
		</div>
	);
}
