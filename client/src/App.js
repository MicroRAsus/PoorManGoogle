import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
			<div className="App">
				<div className="App-bar">
					<img src={logo} className="App-logo" alt="logo" />
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
				</div>
			</div>
    	);
	}
}

export default App;
