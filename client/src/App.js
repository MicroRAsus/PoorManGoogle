import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QueryForm from './container/QueryForm.js';
import axios from 'axios';

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
		axios.post('/api/query', {
    		q: this.state.q
		})
		.then(function (response) {
			this.setState({r: response.data.r});
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
  	}

	render() {
		return (
			<div className="App">
				<div className="App-bar">
					<img src={logo} className="App-logo" alt="logo" />
					<QueryForm onSubmit={this.handleSubmit} validateForm={this.validateForm} handleChange={this.handleChange} q={this.state.q} />
					{this.state.r.toString();}
				</div>
			</div>
    	);
	}
}

export default App;
