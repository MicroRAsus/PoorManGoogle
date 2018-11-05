import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QueryForm from './container/QueryForm.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-bar">
					<img src={logo} className="App-logo" alt="logo" />
					<QueryForm />
				</div>
			</div>
    	);
	}
}

export default App;
