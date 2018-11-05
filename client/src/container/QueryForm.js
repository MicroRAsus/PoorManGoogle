import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";

class QueryForm extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      q: "",
		  r:[]
	    };
  	}

	validateForm() {
    	return this.state.q.length > 0;
  	}

	handleChange = event => {
		this.setState({ q: event.target.value });
  	}

	handleSubmit = event => {
    	event.preventDefault();
  	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<FormGroup controlId="query" bsSize="large">
					<FormControl
						autoFocus
						type="text"
						value={this.state.q}
						placeholder="Enter your query here..."
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button
					block
					bsSize="medium"
					type="submit"
					disabled={!this.validateForm()}
				>
					Nuke!
				</Button>
			</form>
		);
	}
}

export default QueryForm;
