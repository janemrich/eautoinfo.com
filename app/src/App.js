import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';
import { Bar } from './Bar.js';
import { Route, Redirect } from "react-router";

class App extends Component {
	
	state = {
		cars: [],
		toDetail: null,
	}

	handleCardClick(id) {
		this.setState({
			toDetail: id,
		})
	}

	componentDidMount() {
        fetch('https://api.eautoinfo.com/cars')
        .then(res => res.json())
        .then((data) => {
        	this.setState({ cars: data })
		})
		.catch(console.log);
    }

	render() {
		if (this.state.toDetail) {
			return <Redirect to={'/car/' + this.state.toDetail} />
		}

		return (
				<div className="App">
					<Bar />
					<p>{this.state.name}</p>
					<CarsList cars={this.state.cars}
						onClick={(id) => this.handleCardClick(id)}
					/>
				</div>
		);
	}

}

export default App;
