import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';
import { Bar } from './Bar.js';
import { Redirect } from "react-router";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper, Box, Icon, Avatar } from '@material-ui/core';


import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

class App extends Component {
	constructor(props) {
		super(props);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleRangeChange = this.handleRangeChange.bind(this);
	}
	
	state = {
		cars: [],
		carsToCompare: [],
		toDetail: null,
		price: "",
		range: "",
		sortby: ""
	}

	handleCardClick(id) {
		this.setState({
			toDetail: id,
		})
	}

	handleAddClick(id) {
		this.setState({
			carsToCompare: this.state.carsToCompare.concat(
				this.state.cars.find(
					car => car.id == id
				)
			),
		})
	}

	handleDelete(id) {
		this.setState({
			carsToCompare: this.state.carsToCompare.filter(
				car => car.id !== id
			)
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

	handleSortChange(type) {
		this.setState({
			sortby: type,
		})
	}

	selectCarList(cars) {
		let filtered_cars =
			cars.filter(
				car => car.price_de > this.state.price
			).filter(
				car => car.range_wlpt > this.state.range
			);
		switch (this.state.sortby) {
			case 'price':
				return filtered_cars.sort(
					(a, b) => (a.price_de > b.price_de) ? 1 : -1
				)
			case 'range':
				return filtered_cars.sort(
					(a, b) => (a.range_wlpt < b.range_wlpt) ? 1 : -1
				)
			case 'efficiency':
				return filtered_cars.sort(
					(a, b) => (a.efficiency > b.efficiency) ? 1 : -1
				)
			case 'fast_charge':
				return filtered_cars.sort(
					(a, b) => (a.fast_charge < b.fast_charge) ? 1 : -1
				)
			case 'top_speed':
				return filtered_cars.sort(
					(a, b) => (a.top_speed < b.top_speed) ? 1 : -1
				)
			case 'acceleration':
				return filtered_cars.sort(
					(a, b) => (a.acceleration > b.acceleration) ? 1 : -1
				)
			case '':
				return filtered_cars;
		}
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
						sortby={this.state.sortby}
						onSortChange={(type) => this.handleSortChange(type)}
					/>
					<CarsList
						cars={ this.selectCarList(this.state.cars) }
						onClick={(id) => this.handleCardClick(id)}
						onAddClick={(id) => this.handleAddClick(id) }
					/>
					{this.state.carsToCompare.length > 0 &&
						<Paper className="cars-to-compare">
							<Button variant="outlined"> vergleiche</Button>
							{ this.state.carsToCompare.map(
								car => <Chip
											className="car-chip"
											avatar={<Avatar src={'https://api.eautoinfo.com' + car.thumbnail.url} />}
											onDelete={() => this.handleDelete(car.id)}
											label={car.model}
										/>
							)}
						</Paper>
					}
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
			<FilterListIcon /> 
			<Chip
				className="filter-chip"
				{...((props.sortby == 'price') ? {color: 'primary'} : {})}
				label="Preis"
				clickable
				onClick={ () => props.onSortChange('price')}
			/>
			<Chip
				className="filter-chip"
				{...((props.sortby == 'range') ? {color: 'primary'} : {})}
				label="Reichweite"
				clickable
				onClick={ () => props.onSortChange('range')}
			/>
			<Chip
				className="filter-chip"
				{...((props.sortby == 'efficiency') ? {color: 'primary'} : {})}
				label="Effizienz"
				clickable
				onClick={ () => props.onSortChange('efficiency')}
			/>
			<Chip
				className="filter-chip"
				{...((props.sortby == 'fast_charge') ? {color: 'primary'} : {})}
				label="Schnellladen"
				clickable
				onClick={ () => props.onSortChange('fast_charge')}
			/>
			<Chip
				className="filter-chip"
				{...((props.sortby == 'top_speed') ? {color: 'primary'} : {})}
				label="Höchstgeschwindigkeit"
				clickable
				onClick={ () => props.onSortChange('top_speed')}
			/>
			<Chip
				className="filter-chip"
				{...((props.sortby == 'acceleration') ? {color: 'primary'} : {})}
				label="Beschleunigung"
				clickable
				onClick={ () => props.onSortChange('acceleration')}
			/>
		</Paper>
	)
}

function Sort(props) {

}