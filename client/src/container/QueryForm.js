import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";

class QueryForm extends Component {
	validateForm() {
    	return this.props.validateForm();
  	}

	handleChange = event => {
		this.props.handleChange(event.target.value);
  	}

	handleSubmit = (event) => {
    	event.preventDefault();
		this.props.onSubmit();
  	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<FormGroup controlId="query" bsSize="large">
					<FormControl
						autoFocus
						type="text"
						value={this.props.q}
						placeholder="Enter your query here..."
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button
					block
					bsSize="medium"
					type="submit"
					disabled={!this.validateForm}
				>
					Nuke!
				</Button>
			</form>
		);
	}
}

export default QueryForm;
