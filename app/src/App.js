import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';
import { Bar } from './Bar.js';
import { Redirect } from "react-router";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper } from '@material-ui/core';


class App extends Component {
	constructor(props) {
		super(props);
		this.handlePriceChange = this.handlePriceChange.bind(this);
	}
	
	state = {
		cars: [],
		toDetail: null,
		price: "",
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

	render() {
		if (this.state.toDetail) {
			return <Redirect to={'/car/' + this.state.toDetail} />
		}

		return (
				<div className="App">
					<Bar onClick={ () => this.handleMainClick()}/>
					<Paper className="filters">
						<Filter
							onChange={this.handlePriceChange }
							value={this.state.price}
						/>
					</Paper>	
					<CarsList
						cars={ this.state.cars.filter(
							car => car.price_de > this.state.price)}
						onClick={(id) => this.handleCardClick(id)}
					/>
				</div>
		);
	}

}

export default App;

function Filter(props) {
	return (
		<TextField
			id="outlined-adornment-amount"
			//className={clsx(classes.margin, classes.textField)}
			variant="outlined"
			label="Preis ab"
			value={props.value}
			onChange={ props.onChange }
			InputProps={{
			startAdornment: <InputAdornment position="start">€</InputAdornment>,
			}}
		/>
		
	)
}