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
		.then(function (response) {
			this.setState(prevState => ({
				r: [...response.data.r]
			}));
			console.log(this.state.r);
			console.log(response.data.r);
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
					<ResultList results={this.state.r}/>
				</div>
			</div>
    	);
	}
}

export default App;
