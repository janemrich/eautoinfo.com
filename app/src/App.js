import React, { Component } from 'react';
import './App.css';
import { CarsList } from './Cars.js';
import { Bar } from './Bar.js';
import Sort from './Sort.js';
import { Redirect } from "react-router";
import { Paper, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { getCarsList } from './store/actionCreator';
import store from './store';
import { withQueryState } from "./hooks";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cars: [],
			carsToCompare: [],
		};
	}
	
	handleCardClick = (id) => {
		this.props.setQueryState({
			toDetail: id,
		});
	};

	handleAddClick = (id) => {
		this.setState({
			carsToCompare: this.state.carsToCompare.concat(
				this.state.cars.find(
					car => car.id === id
				)
			),
		});
	};

	handleDelete = (id) => {
		this.setState({
			carsToCompare: this.state.carsToCompare.filter(
				car => car.id !== id
			)
		});
	};

	componentDidMount() {
		getCarsList()(res => this.setState({cars: res.data}));
	};

	handleMainClick = () => {
		this.props.setQueryState({
			toDetail: null,
		});
	};

	handlePriceChange = (event) => {
		this.props.setQueryState({
			price: event.target.value,
		});
	};

	handleRangeChange = (event) => {
		this.props.setQueryState({
			range: event.target.value,
		});
	};

	handleSortChange = (type) => {
		this.props.setQueryState({
			sortby: type,
		})
	};

	selectCarList() {
		let filtered_cars =
			this.state.cars.filter(
				car => car.price_de > this.props.queryState.price
			).filter(
				car => car.range_wlpt > this.props.queryState.range
			);
		for (let brand of this.props.queryState.filter_brands) {
			filtered_cars = filtered_cars.filter(
				car => car.manufacturer != brand
			);
		}
		switch (this.props.queryState.sortby) {
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

	getBrands() {
		let brands = new Set(
			this.state.cars.map( car => car.manufacturer)
		);
		return brands;
	}

	handleBrandChange = ( brand ) => {
		if (brand === 'alle') {
			this.props.setQueryState({
				filter_brands: Array.from(this.getBrands())
			});
			return;
		}
		if (brand === 'keine') {
			this.props.setQueryState({
				filter_brands: []
			});
			return;
		}

		let brands = this.props.queryState.filter_brands;
		
		if (brands.includes(brand)) {
			brands = brands.filter(
				f_brand => f_brand != brand
			)
		} else {
			brands.push(brand)
		}
		
		this.props.setQueryState({
			filter_brands: brands
		});
	};

	handleCompareClick = () => {
		this.props.setQueryState({
			toComparison: true,
		})
	};

	render() {
		if (this.props.queryState.toDetail) {
			return <Redirect to={'/car/' + this.props.queryState.toDetail} />
		}
		if (this.props.queryState.toComparison) {
			return <Redirect to={{
								pathname: '/compare/',
								state: {cars: this.state.carsToCompare}
							}}
					/>
		}
		const filteredCars = this.selectCarList() || [];
		return (
				<div className="App">
					<Bar onClick={ () => this.handleMainClick()}/>
					<Sort
							onPriceChange={ this.handlePriceChange }
							price={this.props.queryState.price}
							onRangeChange={ this.handleRangeChange }
							range={this.props.queryState.range}
							sortby={this.props.queryState.sortby}
							onSortChange={this.handleSortChange}
							brands={ this.getBrands() }
							filter_brands={ this.props.queryState.filter_brands }
							onBrandChange={ this.handleBrandChange }
						/>
					<CarsList
						cars={ filteredCars }
						onClick={(id) => this.handleCardClick(id)}
						onAddClick={(id) => this.handleAddClick(id) }
					/>
					{this.state.carsToCompare.length > 0 &&
						<CompareBox
							onClick={ () => this.handleCompareClick()}
							onDelete={ (id) => this.handleDelete(id)}
							cars={ this.state.carsToCompare }
						>
						</CompareBox>
					}
				</div>
		);
	}

}

function CompareBox(props) {
	return (
		<Paper className="cars-to-compare">
			<Button
				variant="outlined"
				onClick={ () => props.onClick() }
			>
				vergleiche
			</Button>
			{ props.cars.map(
				car => <Chip
							className="car-chip"
							avatar={<Avatar src={'https://api.eautoinfo.com' + car.thumbnail.url} />}
							onDelete={() => props.onDelete(car.id)}
							label={car.model}
						/>
			)}
		</Paper>

	)
}


export default withQueryState(App,
	{
		carsToCompare: [],
		toDetail: null,
		price: "",
		range: "",
		sortby: "",
		filter_brands: [],
	}
);