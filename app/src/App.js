import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';
import { Bar } from './Bar.js';

class App extends Component {
	
	state = {
		cars: []
	}

	componentDidMount() {
        fetch('http://localhost:1337/cars')
        .then(res => res.json())
        .then((data) => {
        	this.setState({ cars: data })
		})
		.catch(console.log);
    }

	render() {
		return (
				<div className="App">
					<Bar />
					<CarsList cars={this.state.cars} />
				</div>
		);
	}

}

export default App;
