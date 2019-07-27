import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';

class App extends Component {
	
	state = {
		cars: []
	}

	componentDidMount() {
        fetch('./cars')
        .then(res => res.json())
        .then((data) => {
          this.setState({ cars: data })
        })
		.catch(console.log);
    }

	render() {
		return (
			<div>
			<h1>Hallo Einfo</h1>
			<div className="App">
				<CarsList cars={this.state.cars} />
			</div>
			</div>
		);
	}

}

export default App;
