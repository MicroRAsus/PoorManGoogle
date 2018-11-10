import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";

class QueryForm extends Component {
	constructor(props) {
	    super(props);
  	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<FormGroup controlId="query" bsSize="large">
					<FormControl
						autoFocus
						type="text"
						value={this.props.q}
						placeholder="Enter your query here..."
						onChange={this.props.handleChange}
					/>
				</FormGroup>
				<Button
					block
					bsSize="medium"
					type="submit"
					disabled={!this.props.validateForm}
				>
					Nuke!
				</Button>
			</form>
		);
	}
}

export default QueryForm;
