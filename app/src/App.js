import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';
import { Bar } from './Bar.js';
import { Redirect } from "react-router";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper, Box } from '@material-ui/core';


class App extends Component {
	constructor(props) {
		super(props);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleRangeChange = this.handleRangeChange.bind(this);
	}
	
	state = {
		cars: [],
		toDetail: null,
		price: "",
		range: "",
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

	handleMainClick() {
		this.setState({
			toDetail: null,
		})
	}

	handlePriceChange(event) {
		this.setState({
			price: event.target.value,
		})
	}

	handleRangeChange(event) {
		this.setState({
			range: event.target.value,
		})
	}

	render() {
		if (this.state.toDetail) {
			return <Redirect to={'/car/' + this.state.toDetail} />
		}

		return (
				<div className="App">
					<Bar onClick={ () => this.handleMainClick()}/>
					<Filter
						onPriceChange={ this.handlePriceChange }
						price={this.state.price}
						onRangeChange={ this.handleRangeChange }
						range={this.state.range}
					/>
					<CarsList
						cars={ this.state.cars.filter(
							car => car.price_de > this.state.price
							).filter(
								car => car.range_wlpt > this.state.range
							)}
						onClick={(id) => this.handleCardClick(id)}
					/>
				</div>
		);
	}

}

export default App;

function Filter(props) {
	return (
		<Paper className="filters">
			<Box className="filter-inputs">
			<div className="textField">
			<TextField
				className="textInput"
				id="outlined-adornment-amount"
				variant="outlined"
				label="Preis ab"
				value={props.price}
				onChange={ props.onPriceChange }
				InputProps={{
				startAdornment: <InputAdornment position="start">€</InputAdornment>,
				}}
			/>
			</div>
			<div className="textField">
			<TextField
				className="textInput"
				id="outlined-adornment-amount"
				variant="outlined"
				label="Reichweite ab"
				value={props.range}
				onChange={ props.onRangeChange }
				InputProps={{
				startAdornment: <InputAdornment position="start">km</InputAdornment>,
				}}
			/>
			</div>
			</Box>
		</Paper>
	)
}