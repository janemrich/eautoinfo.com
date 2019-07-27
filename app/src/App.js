import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CarsList } from './Cars.js';

class App extends Component {
	
	cars = []

	componentDidMount() {
        fetch('./cars')
        .then(res => res.json())
        .then((data) => {
          this.setState({ cars: data })
        })
		.catch(console.log);
		alert("fetched");
    }

	render() {
		return (
			<div>
			<h1>Hallo Einfo</h1>
			<div className="App">
				<CarsList cars={this.cars} />
			</div>
			</div>
		);
	}

}

export default App;
