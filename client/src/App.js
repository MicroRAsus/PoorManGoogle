import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QueryForm from './container/QueryForm.js';
import axios from 'axios';
import ResultList from './container/ResultList.js';

class App extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
			q: "",
			r:[]
	    };

		this.validateForm = this.validateForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}

	validateForm() {
    	return this.state.q.length > 0;
  	}

	handleChange = (query) => {
		this.setState({ q: query });
  	}

	handleSubmit = () => {
		axios.post('/api/query', {
    		q: this.state.q
		})
		.then((response) => {
			this.setState({
				r: response.data.r
			});
		})
		.catch((error) => {
			console.log(error);
		});
  	}

	render() {
		return (
			<div className="App">
				<div className="App-bar">
					<img src={logo} className="App-logo" alt="logo" />
					<QueryForm onSubmit={this.handleSubmit} validateForm={this.validateForm} handleChange={this.handleChange} q={this.state.q} />
					<ResultList results={this.state.r}/>
				</div>
			</div>
    	);
	}
}

export default App;
